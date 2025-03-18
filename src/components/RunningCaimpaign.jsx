import React, { useEffect, useState } from 'react';

import CampaignCard from './CampaignCard';

const RunningCaimpaign = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
      fetch("https://crowd-server-fawn.vercel.app/campaigns")
        .then((res) => res.json())
        .then((result) => {
          const today = new Date().toISOString().split("T")[0];
          const activeCampaigns = result.filter((campaign) => campaign.deadline >= today);
          setCampaigns(activeCampaigns.slice(0, 6));
        });
    }, []);
    return (
        <div className="container mx-auto p-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Running Campaigns ({campaigns.length})
        </h2>
        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign._id} campaign={campaign} campaigns={campaigns} setCampaigns={setCampaigns} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No running campaigns at the moment.</p>
        )}
      </div>
    );
};

export default RunningCaimpaign;