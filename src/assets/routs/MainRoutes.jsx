import React from "react";
import HomePage from "../pages/HomePage";
import Layouts from "../components/Layouts/Layouts";
import GrafDizain from "../components/Layouts/GrafDizain";
import Smm from "../components/Layouts/Smm";
import Targetolog from "../components/Layouts/Targetolog";
import Manager from "../components/Layouts/Manager";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/navComp/Contact";
import Price from "../components/navComp/Price";
import We from "../components/navComp/We";
import Copiraiter from "../components/Layouts/Copiraiter"
import Mobilograf from "../components/Layouts/Mobilograf";


export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/",
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
        <Manager />
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
  {
    id: 7,
    path: "/cont",
    element: (
      <Layouts>
        <Contact />
      </Layouts>
    ),
  },
  {
    id: 8,
    path: "/price",
    element: (
      <Layouts>
        <Price />
      </Layouts>
    ),
  },
  {
    id: 9,
    path: "/brand-up",
    element: (
      <Layouts>
        <We />
      </Layouts>
    ),
  },
  {
    id:10,
    path: "/mobilograf",
    element: (
      <Layouts>
        <Mobilograf/>
      </Layouts>
    ),
  },
];

export default function MainRoutes() {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
