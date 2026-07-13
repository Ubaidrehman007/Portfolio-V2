import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

import { sectionVariants } from "./Section.styles";
import type { SectionProps } from "./Section.types";

const Section = ({
  children,
  spacing,
  background,
  container = true,
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        sectionVariants({
          spacing,
          background,
        }),
        className,
      )}
      {...props}
    >
      {container ? <Container>{children}</Container> : children}
    </section>
  );
};

export default Section;
