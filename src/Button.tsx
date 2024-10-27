import React from "react";
import styles from "./Button.module.css";

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
    ${styles["zivivle-btn"]}
    ${styles[`zivivle-btn-${variant}`]}
    ${styles[`zivivle-btn-${type}`]}
    ${styles[`zivivle-btn-${size}`]}
    ${disabled ? styles["zivivle-btn-disabled"] : ""}
  `;

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
