import React, { useContext, useState } from 'react';


import logoImg from "../assets/logo.jpeg"
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { PiEyeBold, PiEyeSlashFill } from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import { ToastContainer } from 'react-toastify';
const Login = () => {

    const { loginUser, googlePopup } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
        // console.log('Form sign up', email, password);
    if (!email || !password) {
      toast.error("Please fill the fields.", {
        position: "top-center",
        autoClose: 4000,
      });
      return;
    }

    try {
        await loginUser(email, password);
        toast.success("Login successful", {
          position: "top-center",
          autoClose: 3000,
        });
  
        const navigateTo = from === "/" ? "/allcampaigns" : from;
        setTimeout(() => {
          navigate(navigateTo, { replace: true });
        }, 1000);
      } catch(err) {
        toast.error("Login failed. Check your email or password.", {
          position: "top-center",
          autoClose: 5000,
        });
      }
};

const handleGoogleSignIn = async () => {
  try {
    await googlePopup();
    toast.success("Logged in with Google!", { position: "top-center" });

    const navigateTo = from === "/" ? "/allcampaigns" : from;
    setTimeout(() => navigate(navigateTo, { replace: true }), 1500);
  } catch (err) {
    toast.error(err.message || "Google sign-in failed.", {
      position: "top-center",
    });
  }
};

const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <div className="flex items-center justify-center mb-4">
            <img src={logoImg} className="w-12" alt="CrowdFunding Logo" />
          </div>
  
          <h2 className="text-blue-600 text-2xl font-bold text-center mb-4">Welcome Back</h2>
  
          <form onSubmit={handleLogin} className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 text-sm mb-2">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"/>
  
            <label htmlFor="password" className="text-gray-700 text-sm mb-2">Password</label>
            <div className="relative">
              <input type={passwordVisible ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="p-3 mb-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"/>
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-700">
                {passwordVisible ? <PiEyeSlashFill /> : <PiEyeBold />}
              </button>
            </div>
  
            <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300 w-full mt-4">
              Login
            </button>
  
            <p className="text-gray-700 border-t mt-3 text-center text-sm font-medium">OR LOGIN WITH</p>
            <button type="button" onClick={handleGoogleSignIn} className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition duration-300 mt-2 flex items-center justify-center gap-2 w-full">
              <FcGoogle className="text-2xl" /> Google
            </button>
  
            <p className="text-gray-900 text-center text-sm mt-3">
              Don't have an account? <Link to="/register" className="text-blue-600 font-semibold">Register</Link>
            </p>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Login;
