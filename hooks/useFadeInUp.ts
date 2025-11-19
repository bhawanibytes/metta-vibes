import { useEffect, useRef } from "react";

export function useFadeInUp() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("animate-fade-in-up");
        el.classList.remove("opacity-0", "translate-y-5");
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
