import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Sublayout/Footer.jsx";
import Welcome from "./Pages/WelcomePage.jsx";
import ManagePage from "./Pages/ManagePage/ManagePage.jsx";
import SideBar from "./components/Sublayout/SideBar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="post" element={<ManagePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
