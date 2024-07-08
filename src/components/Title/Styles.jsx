import styled, { css } from "styled-components";
import { theme } from "./../../styles/theme";

const BaseStyle = css`
    font-size: ${({ size }) => theme.fonts.sizes[size].fontSize};
    color: ${({ color, typeColor }) => theme.colors[typeColor][color]};
    font-weight: ${({ weight }) => weight};
    text-align: ${({ textAlign }) => textAlign};
    max-width: ${({ maxWidth }) => maxWidth};
    margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const Title = styled.h1`
    ${BaseStyle}
`;

const Subtitle = styled.h2`
    ${BaseStyle}
`;

export const TitleOptions = {
    Title,
    Subtitle,
};
