/* eslint-disable react/no-unknown-property */
import React from "react";
import * as S from "./Styles";

import {} from "prop-types";

export const Title = ({
    children,
    color = "black",
    size = "text_base",
    typeColor = "neutral",
    weight = 400,
    ...props
}) => {
    return (
        <S.Title
            color={color}
            size={size}
            weight={weight}
            typeColor={typeColor}
            {...props}
        >
            {children}
        </S.Title>
    );
};

// Title.PropTypes = {
//     children: PropTypes.node.isRequired,
//     color: PropTypes.string,
//     size: PropTypes.string,
//     typeColor: PropTypes.string,
//     weight: [PropTypes.number, PropTypes.string],
// };
