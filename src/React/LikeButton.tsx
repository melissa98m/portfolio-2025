import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

type Props = {
  // Passe les chaînes déjà traduites depuis Astro
  ariaLabel: string;       // ex: t('likeButton.aria')
  likeSingular: string;    // ex: t('like.singular') -> "like" / "J’aime"
  likePlural: string;      // ex: t('like.plural')   -> "likes" / "J’aimes"
};

const DOC_ID = "counter";

const LikeButton: React.FC<Props> = ({ ariaLabel, likeSingular, likePlural }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    // Ne touche pas au render SSR : seulement côté client
    if (typeof window !== "undefined") {
      setIsLiked(localStorage.getItem("websiteIsLiked") === "true");
    }
  }, []);

  useEffect(() => {
    let active = true;

    (async () => {
      const { data, error } = await supabase
        .from("likes")
        .select("likes")
        .eq("id", DOC_ID)
        .maybeSingle();

      if (!error && active) {
        const value = (data as any)?.likes ?? 0;
        setLikes(value);
        if (data == null) {
          // Crée la ligne si elle n’existe pas
          await supabase.from("likes").upsert({ id: DOC_ID, likes: 0 });
        }
      }
    })();

    const channel = supabase
      .channel("realtime:likes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "likes", filter: `id=eq.${DOC_ID}` },
        (payload: any) => {
          if ((payload.eventType === "UPDATE" || payload.eventType === "INSERT") && payload.new) {
            setLikes(payload.new.likes ?? 0);
          }
        }
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  const triggerLikeAnimation = () => {
    setTriggerAnimation(true);
    setTimeout(() => setTriggerAnimation(false), 300);
  };

  const handleLike = async () => {
    if (isProcessing) return;
    if (isLiked) {
      triggerLikeAnimation();
      return;
    }

    try {
      setIsProcessing(true);

      // RPC sécurisé (cf. supabase_migration.sql)
      const { error: rpcError } = await supabase.rpc("increment_like", { row_id: DOC_ID });

      if (rpcError) {
        // Fallback: upsert + update (à durcir via RLS si besoin)
        await supabase.from("likes").upsert({ id: DOC_ID, likes: likes ?? 0 });
        const { error: updError } = await supabase
          .from("likes")
          .update({ likes: (likes ?? 0) + 1 })
          .eq("id", DOC_ID);
        if (updError) throw updError;
      }

      setIsLiked(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("websiteIsLiked", "true");
      }
      triggerLikeAnimation();
    } catch (e) {
      console.error("[like] error", e);
    } finally {
      setIsProcessing(false);
    }
  };

  const likeLabel = (c: number) => (c > 1 ? likePlural : likeSingular);

  const borderColorClass = isLiked ? "border-[var(--sec)]" : "border-[var(--white-icon)]";
  const svgClasses = `
    w-6 h-6 transition-all duration-300 ease-in-out
    ${isLiked ? "text-[var(--sec)] scale-110" : "text-[var(--white-icon)] group-hover:text-[var(--white)] group-hover:scale-105"}
    ${triggerAnimation ? " animate-scale" : ""}
  `;

  return (
    <div className="flex items-center">
      <button
        onClick={handleLike}
        disabled={isProcessing}
        aria-label={ariaLabel}
        className={`hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out rounded-full border px-4 py-2 flex items-center group ${borderColorClass}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={svgClasses}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className={`text-sm pl-3 transition-all duration-300 ease-in-out ${triggerAnimation ? "animate-scale" : ""} text-[var(--white)]`}>
          {likes} {likeLabel(likes)}
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
