import React from "react";
import "./Icon.css";

interface IconProps {
  className?: string;
  name?: string;
}

function Icon({ className, name }: IconProps) {
  let componentClass = "icon material-icon";
  if (className) {
    componentClass += ` ${className}`;
  }

  return <span className={componentClass}>{name}</span>;
}

export default Icon;
