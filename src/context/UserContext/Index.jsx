import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { api } from "./../../services/api/Index";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);

  const createUser = async () => {};

   const getUser = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const { data } = await api.get("/users");
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 2000);
}

  const loginUser = async (email, password) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const {data, statusText} = await api.post("/users", { email, password });
        if (statusText !== "Created") throw new Error();
        getUser()
      } catch (error) {
         setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <UserContext.Provider
      value={{
        data,
        error,
        loading,
        login,
        createUser,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserStorage.propTypes = {
  children: PropTypes.node.isRequired,
  loginUser: PropTypes.func.isRequired,
};
