import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from "../assets/logo.jpeg";
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-10 px-6">
        <div className="container mx-auto flex flex-col items-center text-center">
     
        <Link to="/" className="flex flex-col items-center space-y-2 text-2xl font-semibold">
          <div className="flex row-span-1 items-center ">
            <img className="w-10 h-10 rounded-full" src={logoImg} alt="CrowdCube Logo" />
            <span className="text-blue-400">Crowd</span>
            <span className="text-red-400">Funding</span>
          </div>
          <p className="text-sm text-gray-400">1234 Crowdfunding St, Dhaka, 1205</p>
        </Link>

   
        <nav className="flex flex-wrap justify-center gap-6 mt-5 text-gray-400">
          <Link to="/contactUs" className="hover:text-blue-400 transition">Contact Us</Link>
          <Link to="/allCampaigns" className="hover:text-blue-400 transition">All Campaigns</Link>
          <Link to="/terms" className="hover:text-blue-400 transition">Terms of Use</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition">Privacy & Cookie Policy</Link>
        </nav>

        <div className="flex gap-6 mt-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition" />
          </a>
        </div>

   
        <p className="text-sm text-gray-500 mt-6">© 2025 CrowdFunding. All rights reserved.</p>
      </div>
        </div>
    );
};

export default Footer;

