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
      },
      // details page .......
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
