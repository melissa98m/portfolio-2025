export default {
    meta: {
        title: "Mélissa Mangione — Portfolio",
        description: "Développeuse Fullstack. Projets, contact, stack.",
    },
    nav: {
        home: "Accueil",
        projects: "Projets",
        contact: "Contact",
        language: "Langue"
    },
    home: {
        hello: "Bonjour, je suis Mélissa Mangione",
        headline: "Développeur Fullstack",
        subheadline: "Je conçois des expériences web rapides et accessibles.",
        cta: "Voir mes projets",
    },
    projects: {
        kicker: "Mes travaux",
        title: "Projets",
        status: {
            deployed: "En ligne",
            wip: "En développement",
            contributor: "Contributeur·rice",
        },
        github: "GitHub",
        preview: "Aperçu",
        moreOn: "Plus de projets sur",
    },
    contact: {
        kicker: "Discutons",
        title: "Contact",
        blurb: "Une question ou un projet en tête ? Écrivez-moi.",
        locationLabel: "Localisation :",
        locationValue: "Le champ prés Froges, Isére",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        success: "Merci pour votre message !",
        error: "Un problème est survenu lors de l’envoi du message.",
    },
    footer: {
        rights: "Tous droits réservés.",
        builtWith: "Construit avec",
        styledWith: "Stylisé avec",
        deployedOn: "Déployé sur",
    },
    likeButton: {
        likeSingular: "mention J’aime",
        likePlural: "mentions J’aime",
        aria: "Bouton J’aime",
        updateError: "Une erreur est survenue lors de la mise à jour des likes.",
        docMissing: "Le document n’existe pas.",
    },
    skills: {
        title: "Ce que je fais",
        categories: {
            web: "Développement Web",
            mobile: "Développement Mobile",
            design: "Design UI/UX & Prototypage",
        },
        items: {
            web: {
                spa: "Applications monosite (SPA)",
                landing: "Landing pages et sites vitrines",
                portfolio: "Sites portfolio",
            },
            mobile: {
                pwa: "Applications web adaptées au mobile",
                reactNative: "Applications mobiles React Native",
            },
            design: {
                ui: "Design d’interface avec Figma & Canva",
                ux: "Recherche UX & améliorations",
                proto: "Prototypage pour sites & apps mobiles",
            },
        },
    },



} as const;
