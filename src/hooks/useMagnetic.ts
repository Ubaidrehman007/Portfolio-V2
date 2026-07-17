import { RefObject, useEffect } from "react";

export function useMagnetic<T extends HTMLElement>(ref: RefObject<T | null>, strength = 30) {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x = event.clientX - (rect.left + rect.width / 2);

      const y = event.clientY - (rect.top + rect.height / 2);

      element.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0px, 0px)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength]);
}
