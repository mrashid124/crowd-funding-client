import React, { useContext } from 'react';
import Swal from "sweetalert2";
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCampaign = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    // const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    // if(!urlPattern.test(image)){
    //   toast.error('Invalid img url');
    //   return;
    // }
    const campaign_title = form.campaign_title.value;
    const campaign_type = form.campaign_type.value;
    const description = form.description.value;
    const minimum_donation = form.minimum_donation.value;
    const deadline = form.deadline.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const data = {
      image,
      campaign_title,
      campaign_type,
      description,
      minimum_donation,
      deadline,
      user_email,
      user_name,
    };
    // https://crowd-server-fawn.vercel.app(data);
    // data send to server
    fetch('https://crowd-server-fawn.vercel.app/campaigns', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body:JSON.stringify(data)
    })
      .then(res => res.json)
      .then(data => {
        // https://crowd-server-fawn.vercel.app(data);
        if(data.insertedId){
          Swal.fire({
              title: 'Success!',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
            form.reset();
      }
      navigate("/allCampaigns");
      });

  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-center text-3xl font-bold text-[#1d4ed8] mb-6">Add New Campaign</h2>
        <form onSubmit={handleCampaign} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Image URL</label>
            <input type="text" name="image" placeholder="Enter image URL" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#1d4ed8]" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Campaign Title</label>
            <input type="text" name="campaign_title" placeholder="Enter Campaign Title" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#1d4ed8]" required />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold">Campaign Type</label>
            <select name="campaign_type" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#1d4ed8]" required>
              <option value="Personal Issue">Personal Issue</option>
              <option value="Start up">Start up</option>
              <option value="Business">Business</option>
              <option value="Creative Ideas">Creative Ideas</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea name="description" placeholder="Enter Description" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#1d4ed8]" required></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Minimum Donation Amount ($)</label>
            <input type="number" name="minimum_donation" min="1" placeholder="Minimum Donation Amount" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#1d4ed8]" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Deadline (Date)</label>
            <input type="date" name="deadline" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#1d4ed8]" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">User Email</label>
            <input type="text" name="user_email" className="w-full border rounded-lg p-2 bg-gray-200" readOnly defaultValue={user?.email} />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">User Name</label>
            <input type="text" name="user_name" className="w-full border rounded-lg p-2 bg-gray-200" readOnly defaultValue={user?.displayName} />
          </div>
          <div className="text-center mt-6">
            <button className="w-full py-3 rounded-lg text-white bg-[#dc2626] hover:bg-[#b91c1c] font-bold">Add New Campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;