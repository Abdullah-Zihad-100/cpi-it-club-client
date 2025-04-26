import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Members from "../pages/Members";
import Event from "../pages/Event";
import About from "../pages/About";
import Login from "../pages/login";
import Register from "../pages/register";
import PrivetRoute from "./PrivateRoute";
import Classes from "../pages/Classes";
import CourseDetails from "../pages/CourseDetails";
import EventDetails from "../pages/EventDetails";
import Dashboard from "../Dashboard/Dashboard";
import ManageNotice from "../Dashboard/pages/ManageNotice";
import ManageClasses from "../Dashboard/pages/ManageClasses";
import ManageCourses from "../Dashboard/pages/ManageCourses";
import ManageEvents from "../Dashboard/pages/ManageEvents";
import EditClasses from "../Dashboard/pages/EditClasses";
import Profile from "../pages/Profile";
import ManageUsers from "../Dashboard/pages/ManageUsers";
import ManageGallery from "../Dashboard/pages/manageGallery";
import AdminRoute from "./AdminRoute";
import ManageMembers from "../Dashboard/pages/ManageMembers";
import EditProfile from "../pages/EditProfile";
import Assignments from "../pages/Assignments";
import ManageAssignments from "../Dashboard/pages/ManageAssignments";
import Contact from "../pages/Contact";
import GameSec from "../Components/GameSec";
import ErrorPage from "../pages/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/play-game",
        element: <GameSec />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/classes",
        element: (
          <PrivetRoute>
            <Classes />
          </PrivetRoute>
        ),
        // details page .......
      },
      {
        path: "/course/:id",
        element: (
          <PrivetRoute>
            <CourseDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/event/:id",
        element: (
          <PrivetRoute>
            <EventDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/assignments",
        element: (
          <PrivetRoute>
            <Assignments />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile/edit/:id",
        element: (
          <PrivetRoute>
            <EditProfile />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "manage-notice",
        element: <ManageNotice />,
      },
      {
        path: "manage-classes",
        element: <ManageClasses />,
      },
      {
        path: "manage-classes/edit/:id",
        element: <EditClasses />,
      },
      {
        path: "manage-events",
        element: <ManageEvents />,
      },
      {
        path: "manage-courses",
        element: <ManageCourses />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-gallery",
        element: <ManageGallery />,
      },
      {
        path: "manage-members",
        element: <ManageMembers />,
      },
      {
        path: "manage-assignments",
        element: <ManageAssignments />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
