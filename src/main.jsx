import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from './Store'
import Particle from './packages/Particle.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <div>
        <Particle />
        <App />
        <ToastContainer />
      </div>
    </Provider>
  </>
);
