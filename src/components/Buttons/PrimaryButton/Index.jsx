import React from "react";
import { Buttonsoptions } from "./Styles";

export const PrimaryButton = ({
    children,
    variant = "primary",
    disabled = false,
    startIcon = false,
    endIcon = false,
    loading = false,
}) => {
    const ButtonComponent = Buttonsoptions[variant];

    return (
        <ButtonComponent disabled={disabled}>
            {startIcon && <span>{startIcon}</span>}
            {!loading && <p>{children}</p>}
            {endIcon && <span>{endIcon}</span>}
            {loading && <span>Loading...</span>}
        </ButtonComponent>
    );
};
