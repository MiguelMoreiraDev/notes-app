import React from "react";
import * as S from "./Style"
import PropTypes from "prop-types";

export const Error = ({ error }) => {
    return <S.Error>{error}</S.Error>;
};

Error.propTypes = {};
