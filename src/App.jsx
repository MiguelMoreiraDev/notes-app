import React from "react";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginRoutes } from "./routes/LoginRoutes/Index";
import { theme } from "./styles/theme";
import { UserStorage } from "./context/UserContext/Index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<LoginRoutes />} />
          </Routes>
        </BrowserRouter>
      </UserStorage>
    </ThemeProvider>
  );
};

export default App;
