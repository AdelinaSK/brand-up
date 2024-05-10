import React from "react";
import Navbar from "./assets/navbar/Navbar";
import Foot from "./assets/Footer/Foot";
import HomePage from "./assets/pages/HomePage";
import MainRoutes from "./assets/routs/MainRoutes";
import Layouts from "./assets/components/Layouts/Layouts";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <HomePage />
      <Layouts />
      <Foot />
    </div>
  );
};

export default App;
