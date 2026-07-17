import { Reveal } from "@/components/common";

import { ExpertiseCards } from "./ExpertiseCards";
import { SkillsHeader } from "./SkillsHeader";
import { TechGrid } from "./TechGrid";

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SkillsHeader />

          <TechGrid />

          <ExpertiseCards />
        </div>
      </Reveal>
    </section>
  );
}
