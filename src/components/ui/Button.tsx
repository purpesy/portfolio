import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group/btn relative inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--color-primary)]/50 focus-visible:ring-offset-1 focus-visible:ring-offset-black",
          "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          "h-11 px-6 py-2",
          /* Glass base */
          "bg-black/40 backdrop-blur-sm border text-[color:var(--color-foreground)]",
          "shadow-[inset_0_1px_0_rgba(255,253,242,0.07),0_4px_20px_-6px_rgba(0,0,0,0.6)]",
          variant === "primary" &&
            "border-[color:var(--color-primary)]/45 shadow-[inset_0_1px_0_rgba(255,253,242,0.09),0_0_28px_-6px_var(--color-glow)] hover:border-[color:var(--color-primary)]/70 hover:bg-black/55 hover:shadow-[inset_0_1px_0_rgba(255,253,242,0.12),0_0_38px_-4px_var(--color-glow)]",
          variant === "secondary" &&
            "border-[color:var(--color-primary)]/18 hover:border-[color:var(--color-primary)]/38 hover:bg-black/55",
          variant === "outline" &&
            "border-[color:var(--color-primary)]/18 bg-transparent hover:border-[color:var(--color-primary)]/38 hover:bg-black/30",
          variant === "ghost" &&
            "border-transparent bg-transparent backdrop-blur-none shadow-none hover:bg-black/30 hover:border-[color:var(--color-primary)]/15",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
