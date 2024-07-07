import styled, { css } from "styled-components";
import { theme } from "./../../styles/theme";

export const Title = styled.h1`
    font-size: ${({ size }) => theme.fonts.sizes[size].fontSize};
    color: ${({ color, typeColor }) => theme.colors[typeColor][color]};
    font-weight: ${({ weight }) => weight};
    text-align: ${({ textAlign }) => textAlign};
    max-width: ${({ maxWidth }) => maxWidth};
    margin-bottom: ${({ marginBottom }) => marginBottom};
`;
