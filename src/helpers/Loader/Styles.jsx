import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

export const loaderAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.neutral.dark_gray};
  animation: ${loaderAnimate} 2s linear infinite;
`
