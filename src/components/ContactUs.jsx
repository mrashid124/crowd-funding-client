import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

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
    <div className="my-10 bg-blue-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-blue-500 font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Feel free to reach out to us for any questions, feedback, or support.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-blue-600 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`input input-bordered w-full ${errors.email ? "border-red-500" : "border-blue-400"}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-blue-600 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className={`textarea textarea-bordered w-full ${errors.message ? "border-red-500" : "border-blue-400"}`}
                  required
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn bg-blue-600 text-white w-full hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-blue-500 font-semibold mb-4">Our Contact Details</h2>
            <div className="flex items-center gap-2 mb-4">
              <FaEnvelope className="text-blue-500" />
              <span className="text-gray-700">info@Crowdfunding.com</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <FaPhoneAlt className="text-blue-500" />
              <span className="text-gray-700">0088 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className="text-gray-700">123 Fundraising Lane, Crowdfun City, BD.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
