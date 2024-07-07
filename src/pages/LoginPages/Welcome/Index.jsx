import React from "react";
import WelcomeImg from "../../../assets/NotesAniwhen.svg?react";
import * as S from "./Styles";
import { Title } from "../../../components/Title/Index";
import { PrimaryButton } from "../../../components/Buttons/PrimaryButton/Index";


export const Welcome = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
                <Title>
                    Jot Down anything you want to achieve, today or in the
                    future
                </Title>
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <p key={index}>Oi</p>
                    ))}
            </div>
            <PrimaryButton>Click me!</PrimaryButton>
        </div>
    );
};
