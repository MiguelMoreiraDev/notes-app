/* eslint-disable react/no-unknown-property */
import React from "react";

import PropTypes, { oneOfType } from "prop-types";
import { TitleOptions } from "./Styles";

export const Title = ({
    variant = "Title",
    children,
    color = "black",
    size = "text_base",
    typeColor = "neutral",
    weight = 400,
    ...props
}) => {
    const TitleComponent = TitleOptions[variant];

    return (
        <TitleComponent
            color={color}
            size={size}
            weight={weight}
            typeColor={typeColor}
            {...props}
        >
            {children}
        </TitleComponent>
    );
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    typeColor: PropTypes.string,
    weight: oneOfType([PropTypes.number, PropTypes.string]),
};
