import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateCampaign from './pages/UpdateCampaign.jsx';
import AddCampaign from './pages/AddCampaign.jsx';
import MainLayout from './layout/MainLayout.jsx';
// import App from './App.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';


// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import router from './router/Router.jsx';
import router from './router/Router.jsx';
import { RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Hello</h1>,

//   },
  // {
  //   path: "/addcampaign",
  //   element: <AddCampaign></AddCampaign>,
  // },
  // {
  //   path: "/updateCampaign",
  //   element: <UpdateCampaign></UpdateCampaign>
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
