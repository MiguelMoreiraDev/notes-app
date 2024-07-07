import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background: ${theme.colors.primary.linear_base};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 4rem;

    .welcomeImg {
        width: 300px;
        height: 300px;
        margin-bottom: 4rem;
    }
`;

export const CircleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    margin-bottom: 11.8rem;
`;

export const CircleDetail = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: ${theme.colors.neutral.white};

    &:first-child {
        background: ${theme.colors.secondary.base};
    }
`;
