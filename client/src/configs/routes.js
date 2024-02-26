import Home from "~/pages/Home";
import Search from "~/pages/Search";
import Admin from "~/pages/Admin";
import Destination from "~/pages/Destination";

const routes = [
    {
        path: "/",
        component: Home,
        layout: null,
    },
    {
        path: "/search",
        component: Search,
        layout: null,
    },
    {
        path: "/admin",
        component: Admin,
        layout: null,
    },

    {
        path: "/destinations",
        component: Destination,
        layout: null,
    },
];

export default routes;
