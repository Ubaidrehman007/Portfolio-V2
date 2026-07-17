import { Reveal } from "@/components/common";

import { ExperienceCard } from "./ExperienceCard";
import { ExperienceHeader } from "./ExperienceHeader";

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ExperienceHeader />

          <ExperienceCard />
        </div>
      </Reveal>
    </section>
  );
}
