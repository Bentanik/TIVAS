import Home from "~/pages/Home";
import Search from "~/pages/Search";
import Listing from "~/pages/Listing";
import ListingDetails from "~/pages/ListingDetails";
import TimeshareRentals from "~/pages/TimeshareRentals";
import Policy from "~/pages/Policy";
import Destination from "~/pages/Destination";
import ProjectDetail from "~/pages/ProjectDetail";
import LayoutAdmin from "~/pages/LayoutAdmin";
import AdminDashboard from "~/pages/AdminDashboard";
import AdminCreateProject from "~/pages/AdminCreateProject";
import ProfileLayout from "~/pages/ProfileLayout";
import Profile from "~/components/Layouts/Profile";
import RoomTypeDetail from "~/components/RoomTypeDetail";
import Banking from "~/components/Layouts/Banking";

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
        path: "/projectdetail/:id",
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
    path: "/listing",
    component: Listing,
    layout: null,
  },
  {
    path: "/listingdetails",
    component: ListingDetails,
    layout: null,
  },
  {
    path: "/timesharerentals",
    component: TimeshareRentals ,
    layout: null,
  },
  {
    path: "/policy",
    component: Policy,
    layout: null,
  }
    
];

export default routes;
