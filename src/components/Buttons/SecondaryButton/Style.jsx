import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

const BaseStyle = css`
    background: ${theme.colors.neutral.white};
    color: ${theme.colors.neutral.black};
    padding: 1.6rem 2.4rem;
    font-size: ${theme.fonts.sizes.text_base.fontSize};
    line-height: ${theme.fonts.sizes.text_base.lineHeight};
    font-family: "Inter", sans-serif;
    font-weight: 600;
    border-radius: 10rem;
    width: 100%;
    max-width: 32.8rem;
    transition: all 0.3s ease-in-out;
    border: 1.5px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset,
        0px 1px 3px 0px rgba(0, 0, 0, 0.1);

    &:hover {
        background: ${theme.colors.neutral.base_gray};
        box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.3) inset,
            0px 1px 3px 0px rgba(0, 0, 0, 0.6),
            0 0 0 0.4rem ${theme.colors.neutral.white};
    }

    &:disabled {
        background: ${theme.colors.neutral.base_gray};
        color: ${theme.colors.neutral.light_gray};
        box-shadow: none;
    }
`;

const ButtonSecondary = styled.button`
    ${BaseStyle}
`;

const ButtonSecondaryIconStart = styled.button`
    ${BaseStyle}
    display: flex;
    align-items: center;
    justify-content: start;
    span {
        display: flex;
        align-items: center;
        margin-right: 7.6rem;
        justify-content: center;
    }
`;

const ButtonSecondaryIconEnd = styled.button`
    ${BaseStyle}
    display: flex;
    align-items: center;
    justify-content: end;
    span {
        display: flex;
        align-items: center;
        margin-left: 7.6rem;
        justify-content: center;
    }
`;

const ButtonSecondarySideLeft = styled.button`
    ${BaseStyle}
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p {
        margin: 0 2.8rem;
    }
`;

export const Buttonsoptions = {
    secondary: ButtonSecondary,
    secondaryIconStart: ButtonSecondaryIconStart,
    secondaryIconEnd: ButtonSecondaryIconEnd,
    secondarySideLeft: ButtonSecondarySideLeft,
};
