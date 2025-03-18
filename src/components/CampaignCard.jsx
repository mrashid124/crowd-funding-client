import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CampaignCard = ({ campaign, campaigns, setCampaigns }) => {
    const { _id, image, campaign_title, campaign_type, description, minimum_donation, deadline } = campaign;
    const today = new Date().toISOString().split("T")[0];
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleDelete = (id) => {
      if (!user) {
        navigate("/login");
        return;
      }
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your campaign has been deleted.",
            icon: "success",
          });
  
          fetch(`https://crowd-server-fawn.vercel.app/campaigns/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(() => {
              const remainingCamp = campaigns.filter((cam) => cam._id !== id);
              setCampaigns(remainingCamp);
            });
        }
      });
    };
    return (
        <div className="w-96 shadow-lg rounded-lg overflow-hidden bg-blue-700/20 border border-blue-400 hover:shadow-4xl transition-shadow duration-300">
        <figure className="w-full h-[230px] overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={campaign_title} />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-bold text-blue-800 mb-2">{campaign_title}</h2>
          <p className="text-gray-600 mb-3">{description.slice(0, 100)}...</p>
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {campaign_type}
          </div>
          <div className="text-gray-700 font-semibold text-sm mb-2">Minimum Donation: <span className="text-red-500">${minimum_donation}</span></div>
          {today > deadline ? (
            <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">Expired</div>
          ) : (
            <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold">Active</div>
          )}
          <div className="mt-4 flex justify-between">
            <Link to={`/details/${_id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              See More
            </Link>
            <button
            onClick={() => handleDelete(_id)}
            className="btn btn-primary bg-red-400 hover:bg-red-800 border-none"
          >
            Delete
          </button> 
          </div>
        </div>
      </div>
    );
};

export default CampaignCard;




