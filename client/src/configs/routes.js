import Home from "~/pages/Home";
import Search from "~/pages/Search";
import Admin from "~/pages/Admin";

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
];

export default routes;
