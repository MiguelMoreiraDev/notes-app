import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

const modifiers = {
    disabled: () => css`
        color: ${theme.colors.neutral.base_gray};
        cursor: not-allowed;
        &:hover {
            color: ${theme.colors.neutral.base_gray};
        }
    `,
    small: () => css`
        font-size: ${theme.fonts.sizes.text_2xs.fontSize};
        line-height: ${theme.fonts.sizes.text_2xs.lineHeight};
    `,
    no_underline: () => css`
        text-decoration: none;
    `,
    startIcon: () => css``,

    endIcon: () => css``,
};

export const LinkToNavigation = styled(Link)`
    ${({ underline, disabled, small }) => css`
        color: ${theme.colors.primary.base};
        font-size: ${theme.fonts.sizes.text_base.fontSize};
        line-height: ${theme.fonts.sizes.text_base.lineHeight};
        font-family: "Inter", sans-serif;
        font-weight: 500;
        text-decoration: underline;
        display: flex;
        gap: 0.4rem;
        text-underline-offset: 0.4rem;
        transition: ${theme.transition.default};
        cursor: pointer;

        &:hover {
            color: ${theme.colors.primary.dark};
        }

        ${disabled && modifiers.disabled}
        ${small && modifiers.small}
        ${!underline && modifiers.no_underline}
    `}
`;

export const Icon = styled.span`
    ${({ disabled, small }) => css`
        width: ${small ? "1.6rem" : "initial"};
        height: ${small ? "1.6rem" : "initial"};
        ${disabled && modifiers.disabled};
    `}
`;
