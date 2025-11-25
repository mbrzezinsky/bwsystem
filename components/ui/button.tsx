import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      default: "btn",
      primary: "btn btn-primary",
      secondary: "btn btn-secondary",
      neutral: "btn btn-neutral",
      accent: "btn btn-accent",
      ghost: "btn btn-ghost",
      error: "btn btn-error",
      success: "btn btn-success",
      warning: "btn btn-warning",
      info: "btn btn-info",
      link: "btn btn-link",
      nav: "hover:text-primary inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 hover:text-primary -ml-1",
      icon: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-primary h-7 w-7 -ml-1",
    },
    size: {
      default: "",
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
      nav: "h-8 w-8",
      icon: "h-8 w-8 hover:bg-primary hover:text-primary-content",
    },
    shape: {
      circle: "btn-circle rounded-full",
      square: "btn-square",
      wide: "btn-wide",
      block: "btn-block",
    },
    outline: {
      true: "btn-outline",
    },
    dash: {
      true: "btn-dash",
    },
    soft: {
      true: "btn-soft",
    },
    ghost: {
      true: "btn-ghost",
    },
    link: {
      true: "btn-link",
    },
    active: {
      true: "btn-active",
    },
    disabled: {
      true: "btn-disabled",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    outline: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  Omit<VariantProps<typeof buttonVariants>, "disabled"> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, shape, outline, dash, soft, ghost, link, active, disabled, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            shape,
            outline,
            className,
            dash,
            soft,
            ghost,
            link,
            active,
            disabled,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
