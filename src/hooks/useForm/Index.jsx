import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Email inválido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: "Senha inválida",
  },
}
export const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  
  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(false);
      return true;
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
};
