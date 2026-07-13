import { cn } from "@/lib/utils";

import { textVariants } from "./Typography.styles";
import type { TextProps } from "./Typography.types";

const Text = ({ variant, size, className, children, ...props }: TextProps) => {
  return (
    <p
      className={cn(
        textVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
