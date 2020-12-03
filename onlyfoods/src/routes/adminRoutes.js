// import CreateUser from "views/admin/CreateUser.jsx";
import CreateDigitator from "views/admin/CreateDigitator.jsx";
import GetClients from "views/admin/GetClients.jsx";
import GetUser from "views/admin/GetUser.jsx";
import TransformersMap from "views/admin/TransformersMap.jsx";
import Customization from "views/admin/Customization.jsx";
import CreateReports from "views/admin/CreateReports.jsx";


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
    layout: "/admin",
    plan: "Basico",
  },
  {
    path: "/getClients",
    name: "Lista de Clientes",
    icon: "nc-icon nc-badge",
    component: GetClients,
    layout: "/admin",
    plan: "Basico",
  },
  {
    path: "/createUser",
    name: "Crear Digitador",
    icon: "nc-icon nc-diamond",
    component: CreateDigitator,
    layout: "/admin",
    plan: "Basico",
  },
  {
    path: "/reportes",
    name: "Reportes",
    icon: "nc-icon nc-pin-3",
    component: CreateReports,
    layout: "/admin",
    plan: "Normal",
  },
  {
    path: "/personalizacion",
    name: "Personalizacion",
    icon: "nc-icon nc-pin-3",
    component: Customization,
    layout: "/admin",
    plan: "Premium",
  },
  {
    path: "/bot",
    name: "PWA | Bot",
    icon: "nc-icon nc-pin-3",
    component: "sdsf",
    layout: "/admin",
    plan: "Premium",
  },
  {
    path: "/transformersMap",
    name: "Map",
    icon: "nc-icon nc-pin-3",
    component: TransformersMap,
    layout: "/admin",
    plan: "Premium",
  }
];

export default adminRoutes;
