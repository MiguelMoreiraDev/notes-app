import React from "react";
import { Buttonsoptions } from "./Style";

export const SecondaryButton = ({
    children,
    variant = "secondary",
    disabled = false,
    startIcon = false,
    endIcon = false,
    loading = false,
    onClick,
}) => {
    const ButtonComponent = Buttonsoptions[variant];

    return (
        <ButtonComponent disabled={disabled} onClick={onClick}>
            {startIcon && <span>{startIcon}</span>}
            {!loading && <p>{children}</p>}
            {endIcon && <span>{endIcon}</span>}
            {loading && <span>Loading...</span>}
        </ButtonComponent>
    );
};
