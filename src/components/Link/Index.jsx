import React from "react";

import * as S from "./Styles";
import PropTypes from "prop-types";

export const Link = ({
    link,
    underline = true,
    children,
    small = false,
    disabled = false,
    startIcon = false,
    endIcon = false,
}) => {
    return (
        <S.LinkToNavigation
            to={link}
            underline={underline}
            disabled={disabled}
            small={small}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {startIcon && <S.Icon>{startIcon}</S.Icon>}
            {children}
            {endIcon && <S.Icon>{endIcon}</S.Icon>}
        </S.LinkToNavigation>
    );
};

Link.propTypes = {};
