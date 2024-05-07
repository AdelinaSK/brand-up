import React from "react";
import Header from "../../header/Navbar";
import Foot from "../../Footer/Foot";
const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Foot />
    </>
  );
};

export default Layouts;
