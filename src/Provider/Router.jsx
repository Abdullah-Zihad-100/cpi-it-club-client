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

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <PrivetRoute>
          <About />
        </PrivetRoute>,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/classes",
        element: <Classes />,
      // details page .......
      },
      {
        path: "/course/:id",
        element: <CourseDetails/>,
      },
      {
        path: "/event/:id",
        element: <EventDetails/>,
      },
    ],
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"manage-notice",
        element:<ManageNotice/>
      },
      {
        path:"manage-classes",
        element:<ManageClasses/>
      },
      {
        path:"manage-classes/edit/:id",
        element:<EditClasses/>
      },
      {
        path:"manage-events",
        element:<ManageEvents/>
      },
      {
        path:"manage-courses",
        element:<ManageCourses/>
      },
    ]
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
