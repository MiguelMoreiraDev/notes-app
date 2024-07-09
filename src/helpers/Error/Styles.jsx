import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Error = styled.p`
    font-size: ${theme.fonts.sizes.text_2xs};
    color: ${theme.colors.error.base};
    line-height: ${theme.fonts.sizes.text_2xs.lineHeight};
    font-weight: 400;
`;
