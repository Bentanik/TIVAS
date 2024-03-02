import Home from "~/pages/Home";
import Search from "~/pages/Search";
import Destination from "~/pages/Destination";
import ProjectDetail from "~/pages/ProjectDetail";
import LayoutAdmin from "~/pages/LayoutAdmin";
import AdminDashboard from "~/pages/AdminDashboard";
import AdminCreateProject from "~/pages/AdminCreateProject";
import ProfileLayout from "~/pages/ProfileLayout";
import Profile from "~/components/Layouts/Profile";
import RoomTypeDetail from "~/components/RoomTypeDetail";

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
        path: "/destinations",
        component: Destination,
        layout: null,
    },

    {
        path: "/project-detail",
        component: ProjectDetail,
        layout: null,
    },
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
        path: "/destinations",
        component: Destination,
        layout: null,
    },
    {
        path: "/admin",
        component: AdminDashboard,
        layout: LayoutAdmin,
    },
    {
        path: "/admin/createproject",
        component: AdminCreateProject,
        layout: LayoutAdmin,
    },
    {
        path: "/user/account/profile",
        component: Profile,
        layout: ProfileLayout,
    },
    {
        path: "/room-type-detail",
        component: RoomTypeDetail,
        layout: null,
    },
];

export default routes;
