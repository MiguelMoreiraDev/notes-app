import React, { useContext } from "react";
import { Buttonsoptions } from "./Styles";
import { UserContext } from "../../../context/UserContext/Index";
import { Loader } from './../../../helpers/Loader/Index';

export const PrimaryButton = ({
  children,
  variant = "primary",
  disabled = false,
  startIcon = false,
  endIcon = false,
  isLoading = false,
  ...props
}) => {
  const ButtonComponent = Buttonsoptions[variant];
  const { loading } = useContext(UserContext);

  return (
    <ButtonComponent disabled={disabled} isLoading={loading} {...props}>
      {!loading && startIcon && <span>{startIcon}</span>}
      {!loading ? <p>{children}</p> : <Loader /> }
      {!loading && endIcon && <span>{endIcon}</span>}
    </ButtonComponent>
  );
};
