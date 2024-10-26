import React from "react";

type Props = {
  label: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
};

const Button = ({
  label,
  onClick,
  type = "button",
  className = "",
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
