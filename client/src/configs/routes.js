import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import Search from "~/pages/Search";
import EditProfile from "../pages/EditProfile";
import ProfileUser from "~/pages/ProfileUser";
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
    component: EditProfile,
    layout: null,
  },
  {
    path: "/Profileuser",
    component: ProfileUser,
    layout: null,
  },
];

export default routes;
