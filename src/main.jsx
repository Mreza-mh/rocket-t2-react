import React, { useEffect } from "react";

import "./index.css";
import App from "./App.jsx";

import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./context_store/Store";
import Particle from "./packages/Particle.jsx";
import { Provider } from "react-redux";


const Root = () => {

  useEffect(() => {
    localStorage.removeItem("userData");
  }, []);

  return (
    <Provider store={store}>
      <div>
        <Particle />
        <App />
        <ToastContainer />
      </div>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
