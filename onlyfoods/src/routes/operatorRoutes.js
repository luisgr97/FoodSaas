// import CreateClient from "views/operator/CreateClient.jsx";
// import GetClients from "views/operator/GetClients.jsx";
// import Payments from "views/operator/Payment.jsx";
// import ViewPayments from "views/operator/ViewPayments.jsx";
import Menus from "views/operator/Menus.jsx";
import Productos from "views/operator/Productos.jsx";
import Ingredientes from "views/operator/Ingredientes.jsx";


var operatorRoutes = [
  {
    path: "/menus",
    name: "Gestion de Menus",
    icon: "nc-icon nc-diamond",
    component: Menus,
    layout: "/digitador",
    plan: "Basico"
  },
  {
    path: "/productos",
    name: "Gestion de Productos",
    icon: "nc-icon nc-diamond",
    component: Productos,
    layout: "/digitador",
    plan: "Basico"
  },
  {
    path: "/ingredientes",
    name: "Ges. Ingredientes",
    icon: "nc-icon nc-diamond",
    component: Ingredientes,
    layout: "/digitador",
    plan: "Basico"
  },
  // {
  //   path: "/createClient",
  //   name: "Gestion de Menus",
  //   icon: "nc-icon nc-diamond",
  //   component: CreateClient,
  //   layout: "/operator"
  // },
  // {
  //   path: "/getClients",
  //   name: "getClients",
  //   icon: "nc-icon nc-pin-3",
  //   component: GetClients,
  //   layout: "/operator"
  // },
  // {
  //   path: "/payments",
  //   name: "payments",
  //   icon: "nc-icon nc-credit-card",
  //   component: Payments,
  //   layout: "/operator"
  // },
  // {
  //   path: "/viewPayments",
  //   name: "viewPayments",
  //   icon: "nc-icon nc-single-copy-04",
  //   component: ViewPayments,
  //   layout: "/operator"
  // }
];

export default operatorRoutes;
