import { Reveal } from "@/components/common";

import { FeaturedProject } from "./FeaturedProject";
import { ProjectHeader } from "./ProjectHeader";

export function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProjectHeader />

          <div className="mt-24">
            <FeaturedProject />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
