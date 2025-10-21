
import React from "react";

type PremiumCardProps = React.PropsWithChildren<{
  className?: string;
  shadow?: boolean;
}>;

/**
 * A glassmorphism effect card with optional shadow, responsive styling.
 */
const PremiumCard = ({ children, className = "", shadow = true }: PremiumCardProps) => (
  <div
    className={[
      "rounded-2xl p-8 bg-white/60 dark:bg-zinc-800/80",
      "backdrop-blur-lg border border-primary/20 shadow-2xl",
      shadow ? "" : "shadow-none",
      "hover:scale-[1.022] transition duration-300",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </div>
);

export default PremiumCard;
