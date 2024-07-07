/* eslint-disable react/no-unknown-property */
import React from "react";
import * as S from "./Styles";

export const Title = ({ children, size, color, weight }) => {
    return (
        <h1 size={size} color={color} weight={weight}>
            {children}
        </h1>
    );
};
