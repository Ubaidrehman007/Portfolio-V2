import { cn } from "@/lib/utils";

import { headingVariants } from "./Typography.styles";
import type { HeadingProps } from "./Typography.types";

const Heading = ({ level = 1, size = "h1", className, children, ...props }: HeadingProps) => {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
