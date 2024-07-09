import React, { useContext } from "react";
import * as S from "./Styles";

import { Title } from "./../../../components/Title/Index";
import { Input } from "../../../components/Input/Index";
import { Link } from "./../../../components/Link/Index";
import { PrimaryButton } from "./../../../components/Buttons/PrimaryButton/Index";
import { ArrowRight } from "lucide-react";
import { useForm } from "../../../hooks/useForm/Index";
import { UserContext } from "../../../context/UserContext/Index";

export const LoginForm = () => {
  const { loginUser, loading, data } = useContext(UserContext);

  const email = useForm("email");
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      loginUser(email.value, password.value);
    }
  };

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
        <S.FormContainer onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="email"
            placeholder={"Example: email@gmail.com"}
            {...email}
          />
          <Input
            label="Password"
            type="password"
            placeholder={"******"}
            {...password}
          />
           <Link link={"/login/lost-password"}>Forgot Password</Link>
          <S.ButtonContainer>
            <PrimaryButton 
              disabled={loading}
              variant="primaryIconEnd" 
              endIcon={<ArrowRight/>
            }>
              Login
            </PrimaryButton>
            {data && <p>{data.name}</p>}
            <S.Detail>
              <p>or</p>
            </S.Detail>
            <Link link={"/login/create-account"} underline={false}>
              Dont have any account? Register here
            </Link>
          </S.ButtonContainer>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
};
