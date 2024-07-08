import React from "react";
import * as S from "./Styles";
import { User2 } from "lucide-react";
import { Title } from "./../../../components/Title/Index";
import { Input } from "../../../components/Input/Index";

export const LoginForm = () => {
    return (
        <S.Container className="animeRight">
            <S.Content className="content">
                <S.TitleContainer>
                    <Title
                        variant="Title"
                        size="text_2xl"
                        weight={800}
                        color="black"
                        typeColor="neutral"
                    >
                        Let&apos;s Login
                    </Title>
                    <Title
                        variant="Subtitle"
                        size="text_base"
                        weight={500}
                        color="dark_gray"
                        typeColor="neutral"
                    >
                        And notes your day
                    </Title>
                </S.TitleContainer>
                <S.FormContainer>
                    <Input label="Inout Label" placeholder={"Placeholder"} />
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
            </S.Content>
        </S.Container>
    );
};
