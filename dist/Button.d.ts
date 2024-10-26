import React from "react";
type Props = {
    label: string;
    onClick: () => void;
    type: "button" | "submit" | "reset" | undefined;
    className: string;
};
declare const Button: ({ label, onClick, type, className, ...props }: Props) => React.JSX.Element;
export default Button;
