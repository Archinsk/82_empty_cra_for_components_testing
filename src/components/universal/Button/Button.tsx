import React from "react";
import "./Button.css";
import Icon from "../Icon/Icon.tsx";
// import Badge from "../Badge/Badge";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "small" | "large";
  block?: boolean;
  square?: boolean;
  icon?: string;
  badge?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  className,
  type = "button",
  size,
  block,
  square,
  icon,
  badge,
  onClick,
}: ButtonProps) {
  let componentClass = "button";
  if (size && ["small", "large"].includes(size)) {
    componentClass += ` button-${size}`;
  }
  if (block) {
    componentClass += " button-block";
  }
  if (square) {
    componentClass += " button-square";
  }
  if (icon) {
    componentClass += " button-icon";
  }
  if (badge) {
    componentClass += " button-badge";
  }
  if (className) {
    componentClass += ` ${className}`;
  }

  return (
    <button type={type} className={componentClass} onClick={onClick}>
      {icon ? <Icon name={icon} /> : null}
      {!(icon && square) ? <span>{children}</span> : null}
      {/* {badge ? <Badge className={badge.className}>{badge.text}</Badge> : null} */}
    </button>
  );
}

export default Button;
