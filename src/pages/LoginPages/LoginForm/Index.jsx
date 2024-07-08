import React from "react";
import * as S from "./Styles";
import { ArrowRight } from "lucide-react";
import { Title } from "./../../../components/Title/Index";
import { Input } from "../../../components/Input/Index";
import { Link } from "./../../../components/Link/Index";

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
                    <Input
                        label="Email Address"
                        placeholder={"Example: email@gmail.com"}
                    />
                    <Input label="Password" placeholder={"******"} />
                </S.FormContainer>
                <Link to="/login/lost-password">Forgot your password?</Link>
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
