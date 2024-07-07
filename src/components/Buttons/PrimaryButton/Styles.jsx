import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

const BaseStyle = css`
    background: ${theme.colors.primary.base};
    color: ${theme.colors.neutral.white};
    padding: 1.6rem 2.4rem;
    font-size: ${theme.fonts.sizes.text_base.fontSize};
    line-height: ${theme.fonts.sizes.text_base.lineHeight};
    font-family: "Inter", sans-serif;
    font-weight: 600;
    border-radius: 10rem;
    width: 100%;
    max-width: 32.8rem;
    transition: all 0.3s ease-in-out;
    box-shadow: ${theme.shadow.default};

    &:hover {
        background: ${theme.colors.primary.dark};
        box-shadow: 0 0 0 0.4rem ${theme.colors.primary.base},
            ${theme.shadow.default};
    }

    &:disabled {
        background: ${theme.colors.neutral.base_gray};
        color: ${theme.colors.neutral.light_gray};
        box-shadow: none;
    }
`;

const ButtonPrimary = styled.button`
    ${BaseStyle}
`;

const ButtonPrimaryIconStart = styled.button`
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

const ButtonPrimaryIconEnd = styled.button`
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

const ButtonPrimarySideLeft = styled.button`
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
    primary: ButtonPrimary,
    primaryIconStart: ButtonPrimaryIconStart,
    primaryIconEnd: ButtonPrimaryIconEnd,
    primarySideLeft: ButtonPrimarySideLeft,
};
