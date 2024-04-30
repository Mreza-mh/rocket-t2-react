import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Sublayout/Footer.jsx";
import Welcome from "./Pages/WelcomePage.jsx";
import ManagePage from "./Pages/ManagePage/ManagePage.jsx";
import SideBar from "./components/Sublayout/SideBar.jsx";
import FormComponent from "./Pages/FormPage/Form.jsx";

function App() {
  const isAuthenticated = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData && new Date().getTime() < userData.expirationTime;
  };

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route
            path="/post"
            element={isAuthenticated() ? <ManagePage /> : <Navigate to="/" />}
          />
          <Route
            path="/welcome"
            element={isAuthenticated() ? <Welcome /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
