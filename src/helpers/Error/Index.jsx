import React from "react";
import * as S from "./Styles";
import PropTypes from "prop-types";

export const Error = ({ error }) => {
    return <S.Error>{error}</S.Error>;
};

Error.propTypes = {
    error: PropTypes.string,
};
