

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!email.includes("@")) {
      errors.email = "Please enter a valid email address.";
    }
    if (message.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Message sent successfully! We will get back to you soon.");
      setEmail("");
      setMessage("");
      setErrors({});
    } else {
      toast.error("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="my-10">
      <div className="hero min-h-screen bg-gradient-to-r from-blue-300 to-red-300">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto">
     
          <div className="text-center lg:text-left animate__animated animate__fadeInRight">
            <h1 className="text-5xl font-bold text-blue-700">Get in Touch</h1>
            <p className="py-6 text-blue-700 text-lg font-bold">
              Have questions or want to support us? Send us a message anytime! 
              We appreciate your help in bringing warmth to those in need.
            </p>
          </div>

   
          <div className="card w-full max-w-sm bg-white shadow-xl animate__animated animate__fadeInLeft">
            <form className="card-body" onSubmit={handleSubmit}>
   
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-600">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`input input-bordered ${
                    errors.email ? "border-red-500" : "border-blue-400"
                  }`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

   
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-600">Message</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className={`textarea textarea-bordered ${
                    errors.message ? "border-red-500" : "border-blue-400"
                  }`}
                  required
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

    
              <div className="form-control mt-6 shadow-2xl">
                <button
                  type="submit"
                  className="btn btn-primary hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </div>

        
              <div className="collapse collapse-plus bg-gray-100 mt-4">
                <input type="radio" name="contact-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium text-blue-600">
                  Connect with Us on Social Media
                </div>
                <div className="collapse-content text-gray-700">
                  <p>
                    Follow us on social media to stay updated and get involved. 
                    Our Facebook page and other social media links are available 
                    at the bottom of this website. Join our community and help 
                    us spread warmth and kindness!
                  </p>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;