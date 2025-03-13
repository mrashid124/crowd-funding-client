import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";


const AllCampaigns = () => {

    const addCampaign = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState(addCampaign);

    useEffect(() => {
        document.title = "All Campaigns | CrowdFunding";
    }, []);

    // Sort by minimum donation 
    const sortByMinDonation = () => {
        const sorted = [...addCampaign].sort((a, b) => a.minDonation - b.minDonation);
        setSortedCampaigns(sorted);
    };



    return (
        <div className="container mx-auto mb-12 p-6 bg-gray-50 shadow-md rounded-lg">
            <h1 className="text-center text-blue-600 text-4xl font-extrabold my-8 drop-shadow-lg">All Campaigns</h1>

            <div className="flex justify-center mb-16">
                <div className="relative inline-block text-left">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 shadow-lg transition duration-300">
                        <IoMdArrowDropdown className="text-xl" /> Sort By
                    </button>
                    <ul className="absolute mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                        <li className="px-5 py-3 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition duration-200"
                            onClick={sortByMinDonation}>
                            Minimum Donation
                        </li>
                    </ul>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4  overflow-hidden">
                {sortedCampaigns.map((campaign) => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                ))}
            </div>
        </div>
    );
};

export default AllCampaigns;