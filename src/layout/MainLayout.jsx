import React, { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import Loader from '../components/Loader'


export default function MainLayout() {
  // const allCampaigns = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  if (isLoading) {
    return <Loader></Loader>;
  }
    return (
      <div>

        <Toaster></Toaster>
          <nav>
            <Navbar></Navbar>
          </nav>
          <main className="min-h-screen">
            <Outlet></Outlet>
          </main>
          <div>
            <Footer></Footer>
          </div>
      </div>
    )
  }
  