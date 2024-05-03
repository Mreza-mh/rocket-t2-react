import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UserContext } from "./context_store/context/UserContext.jsx";

import Footer from "./components/Sublayout/Footer.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ManagePage from "./Pages/ManagePage/ManagePage.jsx";
import SideBar from "./components/Sublayout/SideBar.jsx";
import FormComponent from "./Pages/FormPage/Form.jsx";

function App() {

  const getUserData = () => {
    
    const userData = JSON.parse(localStorage.getItem("userData"));

    let userDataMethods = {
      getName: () => null,
      getToken: () => null,
      getLoginTime: () => null,
      getExpirationTime: () => null,
    };

      if (userData) {
        userDataMethods = {
          getName: () => userData.name,
          getToken: () => userData.token,
          getLoginTime: () => userData.loginTime,
          getExpirationTime: () => userData.expirationTime,
        };
      }

    return userDataMethods;
  };


  const user = getUserData();

  return (
    <>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route
              path="/post"
              element={user.getToken() ? <ManagePage /> : <Navigate to="/" />}
            />
            <Route
              path="/welcome"
              element={user.getToken() ? <Dashboard /> : <Navigate to="/" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
