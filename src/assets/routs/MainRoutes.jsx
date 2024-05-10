import React from "react";
import HomePage from "../pages/HomePage";
import Layouts from '../components/Layouts/Layouts';
import Copiraiter from "../components/Layouts/Copiraiter";
import GrafDizain from "../components/Layouts/GrafDizain";
import Smm from "../components/Layouts/Smm";
import Targetolog from "../components/Layouts/Targetolog";
import Meneger from "../components/Layouts/Menedger";
import { Route, Routes } from "react-router-dom";

export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/home",
    element: (
      <Layouts>
        <HomePage />
      </Layouts>
    ),
  },
  {
    id: 2,
    path: "/copi",
    element: (
      <Layouts>
        <Copiraiter />
      </Layouts>
    ),
  },
  {
    id: 3,
    path: "/diz",
    element: (
      <Layouts>
        <GrafDizain />
      </Layouts>
    ),
  },
  {
    id: 4,
    path: "/men",
    element: (
      <Layouts>
        <Meneger />
      </Layouts>
    ),
  },
  {
    id: 5,
    path: "/smm",
    element: (
      <Layouts>
        <Smm />
      </Layouts>
    ),
  },
  {
    id: 6,
    path: "/targ",
    element: (
      <Layouts>
        <Targetolog />
      </Layouts>
    ),
  },
];

export default  function MainRoutes(){
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};