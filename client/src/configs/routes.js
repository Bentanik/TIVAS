import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import Search from "~/pages/Search";
import UserProfile from "../pages/UserProfile";
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
  {
    path: "/search",
    component: Search,
    layout: null,
  },
  {
    path: "/userprofile",
    component: UserProfile,
    layout: null,
  },
];

export default routes;
