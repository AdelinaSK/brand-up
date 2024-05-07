import React from "react";
import HomePage from "../pages/HomePage";
import Layouts from "../components/Layouts"
import Copiraiter from "../components/Layouts/Copiraiter";
import GrafDizain from "../components/Layouts/GrafDizain"
import Meneger from "../components/Layouts/Menedger"
import Smm from "../components/Layouts/Smm"
import Targetolog from "../components/Layouts/Targetolog"

export const PUBLIC_ROUTES=[
    {id:1, path: "/home", element: (<Layouts><HomePage/></Layouts>)},
    {id:2, path: "/copi", element: (<Layouts><Copiraiter/></Layouts>)},
    {id:3, path: "/diz", element: (<Layouts><GrafDizain/></Layouts>)},
    // {id:4, path: "/lay", element: (<Layouts></></Layouts>)},
    {id:4, path: "/men", element: (<Layouts><Meneger/></Layouts>)},
    {id:5, path: "/smm", element: (<Layouts><Smm/></Layouts>)},
    {id:6, path: "/targ", element: (<Layouts><Targetolog/></Layouts>)},
    {id:7, path: "*", element: (<NotFoundPage/>)},
]
const MainRoutes = () => {
  return <div></div>;
};

export default MainRoutes;
