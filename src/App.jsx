import React from "react";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginRoutes } from "./routes/LoginRoutes/Index";
import { theme } from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<LoginRoutes />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
