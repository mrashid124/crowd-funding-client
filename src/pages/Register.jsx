import React, { useContext, useEffect, useState } from 'react';
import logoImg from '../assets/logo.jpeg'
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import { PiEyeBold, PiEyeSlashFill } from 'react-icons/pi';
const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      AOS.init();
      document.title = "Register | CrowdFunding";
    }, []);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const handleRegister = async (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;
  
      let showToast = false;
  
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.", {
          position: "top-center",
        });
        showToast = true;
      }
      if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one uppercase letter.", {
          position: "top-center",
        });
        showToast = true;
      }
      if (!/[a-z]/.test(password)) {
        toast.error("Password must contain at least one lowercase letter.", {
          position: "top-center",
        });
        showToast = true;
      }
      if (showToast) return;
  
      try {
        await createUser(email, password, name, photo);
        toast.success("Registration Successful!", { position: "top-center" });
        const newUser = { name, email, photo };
        await fetch("", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        setTimeout(() => navigate("/allcampaigns"), 1500);
      } catch (error) {
        toast.error(error.message || "Registration failed.", { position: "top-center" });
      }
    };
  
    return (
      <div className="relative bg-gray-100 min-h-screen flex items-center justify-center">
        <ToastContainer />
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-200" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex justify-center mb-4">
            <img src={logoImg} className="w-12" alt="CrowdFunding LogoImg" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-blue-800 mb-2">Register</h2>
          <p className="text-gray-600 text-center mb-4">Join CrowdFunding and start your campaign today!</p>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">Name</label>
              <input type="text" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your name" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">Email</label>
              <input type="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your email" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">Photo URL</label>
              <input type="text" name="photo" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your photo URL" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">Password</label>
              <div className="relative">
                <input type={passwordVisible ? "text" : "password"} name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" placeholder="Create a password" required />
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-3 text-gray-600">
                  {passwordVisible ? <PiEyeSlashFill /> : <PiEyeBold />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">Register</button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-4">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
        </div>
      </div>
    );
  };
  
  export default Register;
