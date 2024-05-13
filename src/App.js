import React from "react";
import Navbar from "./assets/navbar/Navbar";
import Foot from "./assets/Footer/Foot";
import MainRoutes from "./assets/routs/MainRoutes";
import Layouts from "./assets/components/Layouts/Layouts";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Layouts />
      <Foot />
    </div>
  );
};

export default App;
