import React from "react";

const DonationCard = ({ myDonations }) => {
  const { _id, campaign_title, campaign_type, user_name, donation_amount, image } = myDonations;


  return (
    <div className="max-w-sm bg-blue-700/20 shadow-md rounded-lg overflow-hidden border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={campaign_title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Title: {campaign_title}</h2>
        <span className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full mt-2">
          {campaign_type}
        </span>
        <p className="mt-2 text-gray-600">Donated by: <span className="font-semibold">{user_name}</span></p>
        <div className="mt-4">
          <span className="text-gray-700 font-semibold">Donation Amount: </span>
          <span className="text-red-500 font-bold">${donation_amount}</span>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
