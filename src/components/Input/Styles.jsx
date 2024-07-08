import styled, { css } from "styled-components";
import { theme } from "./../../styles/theme";

const modifiers = {
    error: () => css`
        border: 2px solid ${theme.colors.error.base};

        &::placeholder {
            color: ${theme.colors.error.base};
        }
    `,

    disabled: () => css`
        background: ${theme.colors.neutral.light_gray};
        span {
            color: ${theme.colors.neutral.base_gray};
        }
    `,
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const InputContainer = styled.div`
    ${({ error, disabled }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${theme.colors.neutral.base_gray};
        padding: 0rem 1.6rem;
        border-radius: 0.8rem;
        transition: ${theme.transition.default};

        &:focus-within,
        &:active,
        &:hover {
            border-color: ${theme.colors.primary.base};
        }

        ${disabled && modifiers.disabled}
        ${error && modifiers.error}
    `}
`;

export const Input = styled.input`
    ${({ disabled, error }) => css`
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 1.6rem 0rem;
        background: transparent;

        &::placeholder {
            color: ${theme.colors.neutral.base_gray};
            font-size: ${theme.fonts.sizes.text_base.fontSize};
            line-height: ${theme.fonts.sizes.text_base.lineHeight};
            font-family: "Inter", sans-serif;
            font-weight: 500;
        }

        ${disabled && modifiers.disabled}
    `}
`;

export const Label = styled.label``;

export const Icon = styled.span`
    ${({ disabled, error }) => css`
        ${disabled && modifiers.disabled}
        ${error && modifiers.error}
    `}
`;
