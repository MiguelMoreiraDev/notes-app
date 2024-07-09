import React from "react";
import PropTypes from "prop-types";

const types = {
    email: {
        regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Preencha um email válido",
    },
};

export const useForm = (type) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(false);

    const validate = (value) => {
        if (type === false) return true;
        if (value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(false);
            return true;
        }
    };

    const onChange = ({ target }) => {
        if (error) validate(target.value);
        setValue(target.value);
    };

    return {
        value,
        error,
        setValue,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
};

useForm.propTypes = {
    type: PropTypes.string,
};
