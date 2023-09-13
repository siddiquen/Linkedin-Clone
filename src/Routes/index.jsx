import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

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
      element: <Home />, //runs the Home script here
    },
  ]);