import { useEffect, useState } from "react";

interface ParallaxPosition {
  x: number;
  y: number;
}

export function useParallax(strength = 20): ParallaxPosition {
  const [position, setPosition] = useState<ParallaxPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * strength;
      const y = (event.clientY / window.innerHeight - 0.5) * strength;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [strength]);

  return position;
}
