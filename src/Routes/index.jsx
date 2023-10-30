import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, //runs the Login script here
    },
    {
      path: "/register",
      element: <Register />, //runs the Register script here
    },
    {
      path: "/home",
      element: <HomeLayout />, //runs the Home script here
    },
    {
      path: "/profile",
      element: <ProfileLayout />, //runs the profile script here
    },
  ]);