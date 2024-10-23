import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import ErrorPage from "./ErrorPage";
import HomeBanner from "../Components/Home/HomeBanner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<HomeBanner></HomeBanner>
        },
      ],
    },
  ]);

  export default router