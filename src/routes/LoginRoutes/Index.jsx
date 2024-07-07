import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginCreate } from "./../../pages/LoginPages/LoginCreate/Index";
import { LoginLostPassword } from "./../../pages/LoginPages/LoginLostPassword/Index";
import { LoginResetPassword } from "./../../pages/LoginPages/LoginResetPassword/Index";
import { LoginForm } from "./../../pages/LoginPages/LoginForm/Index";
import { Welcome } from "../../pages/LoginPages/Welcome/Index";

export const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/create-account" element={<LoginCreate />} />
            <Route path="/lost-password" element={<LoginLostPassword />} />
            <Route path="/reset-password" element={<LoginResetPassword />} />
        </Routes>
    );
};
