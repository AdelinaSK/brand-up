import React from "react";
import Navbar from '../../navbar/Navbar';
import Foot from "../../Footer/Foot";
const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Foot />
    </>
  );
};

export default Layouts;
