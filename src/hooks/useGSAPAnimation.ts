import { RefObject } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "@/lib/gsap";

interface GSAPOptions {
  animation: (element: HTMLElement) => void;
}

export function useGSAPAnimation(ref: RefObject<HTMLElement | null>, { animation }: GSAPOptions) {
  useGSAP(
    () => {
      if (!ref.current) return;

      animation(ref.current);
    },
    {
      scope: ref,
    },
  );
}
