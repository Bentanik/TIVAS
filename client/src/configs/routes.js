import Home from "~/pages/Home";
import Search from "~/pages/Search";
import ListingDetails from "~/pages/ListingDetails";
import TimeshareRentals from "~/pages/TimeshareRentals";
import Policy from "~/pages/Policy";
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
import Banking from "~/components/Layouts/Banking";
import AdminRoomTypeDetail from "~/pages/AdminRoomTypeDetail";
import TimeshareDetail from "~/pages/TimeshareDetail";

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
    path: "/projectdetail/:id",
    component: ProjectDetail,
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
    path: "/user/account/banking",
    component: Banking,
    layout: ProfileLayout,
  },
  {
    path: "/room-type-detail",
    component: RoomTypeDetail,
    layout: null,
  },
  {
    path: "/listings",
    component: ListingDetails,
    layout: null,
  },
  {
    path: "/timesharerentals",
    component: TimeshareRentals,
    layout: null,
  },
  {
    path: "/policy",
    component: Policy,
    layout: null,
  },
  {
    path: "/admin/user/manageuser/ban",
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
    path: "/admin/typeroomdetail",
    component: AdminRoomTypeDetail,
    layout: LayoutAdmin,
  },

  {
    path: "/admin/projectdetail",
    component: AdminProjectDetail,
    layout: LayoutAdmin,
  },
  {
    path: "/timesharedetail",
    component: TimeshareDetail,
    layout: null,
  },
];

export default routes;
