import React, { createContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [login, setLogin] = React.useState(false);

    const createUser = () => {};

    const loginUser = () => {};

    return <UserContext>{children}</UserContext>;
};

UserStorage.propTypes = {
    children: PropTypes.node.isRequired,
};
