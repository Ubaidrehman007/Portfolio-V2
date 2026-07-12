import type { FC } from "react";
import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";
import { cn } from "@/lib/utils";

const Button: FC<ButtonProps> = ({
  variant,
  size,
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
