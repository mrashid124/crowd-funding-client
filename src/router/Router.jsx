import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";

import AddCampaign from "../pages/AddCampaign";
import AllCampaigns from "../pages/AllCampaigns";
import ErrorPage from "../pages/ErrorPage";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import MyDonations from "../pages/MyDonations";
import MyCampaign from "../pages/MyCampaign";
import app from "../Firebase/firebase.init";
import UpdateCampaign from "../pages/UpdateCampaign";
import CampaignDetails from "../pages/CampaignDetails";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch('https://crowd-server-fawn.vercel.app/campaigns'),

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },

      {
        path: "/addCampaign",
        element: <PrivateRoute>
          <AddCampaign></AddCampaign>
        </PrivateRoute>,
        loader: () => fetch('https://crowd-server-fawn.vercel.app/campaigns'),
      },
      {
        path: "/allCampaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch('https://crowd-server-fawn.vercel.app/campaigns'),

        // loader: ({params})=> fetch(`https://crowd-server-fawn.vercel.app/addCampaign/${params.id}`),
      },
      {
        path: "/myCampaign/:email",
        element: <PrivateRoute>
          <MyCampaign></MyCampaign>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://crowd-server-fawn.vercel.app/campaigns/:email${params.email}`),
      },
      {
        path: "/myDonation",
        element: <PrivateRoute>
          <MyDonations></MyDonations>
        </PrivateRoute>,
        loader: () =>
          fetch(
            `https://crowd-server-fawn.vercel.app/myDonate/${app?.user?.email}`
          ),

      },
      {
        path: "/details/:id",
        element: <PrivateRoute>
          <CampaignDetails></CampaignDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://crowd-server-fawn.vercel.app/details/${params.id}`),
      },
      {
        path: "/updateCampaign/:id",
        element: <UpdateCampaign></UpdateCampaign>,
        loader: ({ params }) => fetch(`https://crowd-server-fawn.vercel.app/details/${params.id}`),
      },
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>,
      },


    ],
  },
  {
    path: "*",
    errorElement: <ErrorPage></ErrorPage>,

  }
]);

export default router;
