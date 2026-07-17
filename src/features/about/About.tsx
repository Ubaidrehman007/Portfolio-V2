import { Reveal } from "@/components/common";

import { AboutHeader } from "./AboutHeader";
import { AboutHighlights } from "./AboutHighlights";
import { AboutTimeline } from "./AboutTimeline";

export function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AboutHeader />

          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            <AboutTimeline />

            <AboutHighlights />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
