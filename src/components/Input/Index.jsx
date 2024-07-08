import React, { useId } from "react";
import * as S from "./Styles";
import { Error } from "../../helpers/Error/Index";

export const Input = ({
    icon,
    error = false,
    disabled = false,
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    onBlur,
}) => {
    const inputId = useId();

    return (
        <S.Container>
            {label && <S.Label htmlFor={inputId}>{label}</S.Label>}
            <S.InputContainer error={error} disabled={disabled}>
                <S.Input
                    type={type}
                    placeholder={placeholder}
                    id={inputId}
                    error={error}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                />
                {icon && <span>{icon}</span>}
            </S.InputContainer>
            {error && <Error error={error} />}
        </S.Container>
    );
};
