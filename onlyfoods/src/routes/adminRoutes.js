// import CreateUser from "views/admin/CreateUser.jsx";
import CreateDigitator from "views/admin/CreateDigitator.jsx";
import GetClients from "views/operator/GetClients.jsx";
import GetUser from "views/admin/GetUser.jsx";
import TransformersMap from "views/admin/TransformersMap.jsx";
import Menus from "views/admin/Menus.jsx";
// import CreateReports from "views/manager/CreateReports.jsx";

var adminRoutes = [
  // {
  //   path: "/createReports",
  //   name: "Reportes",
  //   icon: "nc-icon nc-diamond",
  //   component: CreateReports,
  //   layout: "/admin"
  // },
  {
    path: "/getUser",
    name: "Lista de Digitadores",
    icon: "nc-icon nc-badge",
    component: GetUser,
    layout: "/admin"
  },
  {
    path: "/getClients",
    name: "Lista de Clientes",
    icon: "nc-icon nc-badge",
    component: GetClients,
    layout: "/admin"
  },
  {
    path: "/createUser",
    name: "Crear Digitador",
    icon: "nc-icon nc-diamond",
    component: CreateDigitator,
    layout: "/admin"
  },
  {
    path: "/transformersMap",
    name: "Map",
    icon: "nc-icon nc-pin-3",
    component: TransformersMap,
    layout: "/admin"
  },
  {
    path: "/menus",
    name: "Menus",
    icon: "nc-icon nc-pin-3",
    component: Menus,
    layout: "/admin"
  }
];

export default adminRoutes;
