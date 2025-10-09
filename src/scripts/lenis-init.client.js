
export default async function initLenis() {
  if (typeof window === 'undefined') return;                 // SSR safety
  if (window.__lenis) return;                                 // déjà initialisé
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  const { default: Lenis } = await import('@studio-freight/lenis');

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  window.__lenis = lenis;
}
