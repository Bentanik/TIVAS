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
import ChangePassword from "~/components/ChangePassword";
import AdminManageUser from "~/pages/AdminManageUser";
import AdminUserBanList from "~/pages/AdminUserBanList";
import AdminManageProject from "~/pages/AdminManageProject";
import AdminProjectDetail from "~/pages/AdminProjectDetail";

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
        path: "/admin/manageuser",
        component: AdminManageUser,
        layout: LayoutAdmin,
    },
    {
        path: "/admin/manageproject",
        component: AdminManageProject,
        layout: LayoutAdmin,
    },

    {
        path: "/admin/userbanlist",
        component: AdminUserBanList,
        layout: LayoutAdmin,
    },

    {
        path: "/admin/projectdetail",
        component: AdminProjectDetail,
        layout: LayoutAdmin,
    },

    {
        path: "/user/account/profile",
        component: Profile,
        layout: ProfileLayout,
    },
    {
        path: "/user/account/changepassword",
        component: ChangePassword,
        layout: ProfileLayout,
    },
    {
        path: "/room-type-detail",
        component: RoomTypeDetail,
        layout: null,
    },
];

export default routes;
