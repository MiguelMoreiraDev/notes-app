import React from "react";
import * as S from "./Styles";

import { Title } from "./../../../components/Title/Index";
import { Input } from "../../../components/Input/Index";
import { Link } from "./../../../components/Link/Index";
import { PrimaryButton } from "./../../../components/Buttons/PrimaryButton/Index";
import { ArrowRight } from "lucide-react";

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
                <Link link={"/login/lost-password"}>Forgot Password</Link>
                <S.ButtonContainer>
                    <PrimaryButton
                        variant="primaryIconEnd"
                        endIcon={<ArrowRight />}
                    >
                        Login
                    </PrimaryButton>
                    <S.Detail>
                        <p>or</p>
                    </S.Detail>
                    <Link link={"/login/create-account"} underline={false}>
                        Don´t have any account? Register here
                    </Link>
                </S.ButtonContainer>
            </S.Content>
        </S.Container>
    );
};
