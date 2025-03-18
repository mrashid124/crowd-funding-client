import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const CampaignDetails = () => {
    const [loading, setLoading] = useState(true);
    const [campaign, setCampaign] = useState({});
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://crowd-server-fawn.vercel.app/details/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaign(data);
                setLoading(false);
            });
    }, [id]);

    const today = new Date().toISOString().split("T")[0];
    const { image, campaign_title, campaign_type, description, minimum_donation, deadline } = campaign;

    const handleSubmit = (e) => {
        e.preventDefault();
        const donationAmount = e.target.donationAmount.value;
        const data = {
            image,
            campaign_title,
            campaign_type,
            description,
            minimum_donation,
            deadline,
            user_email: user.email,
            user_name: user.displayName,
            donationAmount,
        };
        fetch(`https://crowd-server-fawn.vercel.app/myDonate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(() => toast.success("Thanks for the donation!"));
    };

    if (loading) {
        return <div className="text-center py-10"><span className="loading loading-bars loading-lg"></span></div>;
    }
    return (
        <div className="max-w-6xl mx-auto my-12 p-6 bg-gray-50 shadow-lg rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
                <div className="rounded-lg overflow-hidden shadow-md">
                    <img className="w-full h-auto object-cover" src={image} alt={campaign_title} />
                </div>
                
      
                <div className="text-gray-900">
                    <h2 className="text-3xl font-extrabold text-blue-900 mb-4 drop-shadow-md">{campaign_title}</h2>
                    <p className="text-lg font-semibold text-gray-700">Campaign Type: <span className="text-blue-700">{campaign_type}</span></p>
                    <p className="text-lg font-semibold text-gray-700">Status: <span className={today > deadline ? "text-red-600" : "text-green-600"}>{today > deadline ? "Closed" : "Active"}</span></p>
                    <p className="text-lg font-semibold text-gray-700">Deadline: <span className="text-blue-700">{deadline}</span></p>
                    <p className="mt-4 text-gray-700">{description}</p>

     
                    <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 shadow-md rounded-lg">
                        <label className="block text-gray-800 font-semibold mb-2">Minimum Donation Amount: {minimum_donation} $</label>
                        <input 
                            type="number" 
                            min={minimum_donation} 
                            name="donationAmount" 
                            placeholder="Enter donation amount" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required 
                        />
                        <button 
                            type="submit" 
                            className={`mt-4 w-full py-3 text-white font-bold rounded-lg transition duration-300 ${today > deadline ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`} 
                            disabled={today > deadline}>
                            {today > deadline ? "Deadline has been Passed" : "Donate Now"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;