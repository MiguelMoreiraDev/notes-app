import React from "react";
import WelcomeImg from "../../../assets/NotesAniwhen.svg?react";
import * as S from "./Styles";
import { Title } from "../../../components/Title/Index";

import { ArrowRight } from "lucide-react";
import { SecondaryButton } from "../../../components/Buttons/SecondaryButton/Index";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
    const navigate = useNavigate();
    const handleNavigateToLogin = () => {
        navigate("/login");
    };

    return (
        <S.Container>
            <S.Content className="content animeDown">
                <WelcomeImg className="welcomeImg" />
                <Title
                    size="text_lg"
                    weight={800}
                    color="white"
                    typeColor="neutral"
                    textAlign="center"
                    maxWidth="30ch"
                    marginBottom="4rem"
                >
                    Jot Down anything you want to achieve, today or in the
                    future
                </Title>
                <S.CircleContainer>
                    {Array(3)
                        .fill(0)
                        .map((_, index) => (
                            <S.CircleDetail key={index} />
                        ))}
                </S.CircleContainer>
                <SecondaryButton
                    onClick={handleNavigateToLogin}
                    variant="secondaryIconEnd"
                    endIcon={<ArrowRight />}
                >
                    Get Started
                </SecondaryButton>
            </S.Content>
        </S.Container>
    );
};
