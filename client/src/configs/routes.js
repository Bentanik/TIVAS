import Home from "~/pages/Home";
import Destination from "~/pages/Destination"

const routes = [
  {
    path: "/",
    component: Home,
    layout: null,
  },
  {
    path: "/destination",
    component: Destination,
    layout: null,
  },

];

export default routes;
