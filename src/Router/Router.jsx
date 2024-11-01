import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import ErrorPage from "./ErrorPage";
import HomeBanner from "../Components/Home/HomeBanner";
import About from "../Components/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
    
    },
  ]);

  export default router