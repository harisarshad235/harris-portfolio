import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl text-sm font-semibold tracking-tight transition-[transform,background-color,border-color,box-shadow,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";
    const variantStyles: Record<string, string> = {
      default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/92 hover:shadow-md active:bg-primary/95 border border-primary/20",
      outline: "border border-border bg-card/80 text-foreground hover:bg-secondary hover:border-foreground/20 active:bg-secondary/90 shadow-2xs",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 border border-border/60",
      ghost: "hover:bg-secondary/60 hover:text-foreground text-foreground/80 active:bg-secondary",
      link: "text-primary underline-offset-4 hover:underline active:opacity-80 p-0 h-auto",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95 shadow-xs",
    };

    const sizeStyles: Record<string, string> = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-lg px-3 text-xs",
      lg: "h-11 rounded-xl px-6 text-sm font-semibold",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant] || ""} ${sizeStyles[size] || ""} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
