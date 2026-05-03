import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import NavHeader from './components/NavigationMenu';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='main'>
        <div>
          <NavHeader />
        </div>
        <div className='app-main'>
          <App />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
