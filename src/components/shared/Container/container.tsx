import type { FC } from "react";

import { cn } from "@/lib/utils";

import { containerVariants } from "./Container.styles";
import type { ContainerProps } from "./Container.types";

const Container: FC<ContainerProps> = ({ children, size, className, ...props }) => {
  return (
    <div className={cn(containerVariants({ size }), className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
