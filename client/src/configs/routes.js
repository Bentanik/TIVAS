import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import Search from "~/pages/Search";
const routes = [
  {
    path: "/",
    component: Home,
    layout: null,
  },
  {
    path: "/destinations",
    component: Destination,
    layout: null,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];

export default routes;
