import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Context/ThemeContext";

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from "./Styles/global";
import Home from "./Pages/Home";
import User from "./Pages/User";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

// Adding a component for handling unknown routes
function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
