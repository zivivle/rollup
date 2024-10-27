import React from "react";
type Props = {
    variant?: "solid" | "outlined" | "text";
    type?: "primary" | "secondary";
    size?: "large" | "medium" | "small";
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
};
declare function Button({ variant, type, size, disabled, children, onClick, }: Props): React.JSX.Element;
export default Button;
