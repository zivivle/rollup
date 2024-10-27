import React from "react";
import "./Button.css";

type Props = {
  variant?: "solid" | "outlined" | "text";
  type?: "primary" | "secondary";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

function Button({
  variant = "solid",
  type = "primary",
  size = "medium",
  disabled = false,
  children,
  onClick,
}: Props) {
  const classNames = `
    btn
    btn-${variant}
    btn-${type}
    btn-${size}
    ${disabled ? "btn-disabled" : ""}
  `;

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
