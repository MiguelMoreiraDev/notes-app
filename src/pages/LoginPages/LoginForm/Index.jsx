import React from "react";
import * as S from "./Styles";
import { Title } from "./../../../components/Title/Index";

export const LoginForm = () => {
    return (
        <S.Container>
            <S.TitleContainer>
                <Title
                    size="text_2xl"
                    weight={800}
                    color="black"
                    typeColor="neutral"
                >
                    Let&apos;s get started
                </Title>
                <h3>And notes your day</h3>
            </S.TitleContainer>
            <S.FormContainer>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <a href="">Link</a>
            </S.FormContainer>
            <S.ButtonContainer>
                <div>
                    <button>Login</button>
                    <span>or</span>
                    <button>Login with Google</button>
                </div>
                <a href="">Do you have an account? Register here</a>
            </S.ButtonContainer>
        </S.Container>
    );
};
