import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./assets/navbar/Navbar";
import Foot from "./assets/Footer/Foot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar />
    <Foot />
    <App />
  </div>
);
