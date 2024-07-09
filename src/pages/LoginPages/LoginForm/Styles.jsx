import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-bottom: 1.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: 4rem;
`;

export const Detail = styled.span`
  width: 100%;
  text-align: center;
  font-size: ${theme.fonts.sizes.text_2xs.fontSize};
  line-height: ${theme.fonts.sizes.text_2xs.lineHeight};
  font-weight: 500;
  color: ${theme.colors.neutral.dark_gray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    z-index: 2;
    padding: 0 1rem;
    background: white;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    width: 50%;
    height: 0.1rem;
    background-color: ${theme.colors.neutral.light_gray};
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    width: 50%;
    height: 0.1rem;
    background-color: ${theme.colors.neutral.light_gray};
  }
`;
