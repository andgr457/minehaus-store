import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import NavHeader from './components/NavigationMenu';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div >
        <NavHeader />
      </div>
      <div className='app-main'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
