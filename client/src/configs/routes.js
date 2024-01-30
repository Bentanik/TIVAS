import GoogleRegister from "~/pages/GoogleRegister";
import Home from "~/pages/Home";

const routes = [
  {
    path: "/",
    component: Home,
    layout: null,
  },
  {
    path: "/registerinformation",
    component: GoogleRegister,
    layout: null,
  },
];

export default routes;
