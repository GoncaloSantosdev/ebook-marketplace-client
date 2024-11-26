import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-semibold transition-all";

  const variants = {
    primary:
      "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white shadow-lg hover:shadow-xl",
    ghost:
      "text-secondary hover:text-primary hover:bg-secondary border border-secondary hover:border-transparent",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-base",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
