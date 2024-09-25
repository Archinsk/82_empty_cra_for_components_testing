import React from "react";
import "./Badge.css";

interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
}

function Badge({ children, className }: BadgeProps) {
  let componentClass = "badge";
  if (className) {
    componentClass += ` ${className}`;
  }

  return <span className={componentClass}>{children}</span>;
}

export default Badge;
