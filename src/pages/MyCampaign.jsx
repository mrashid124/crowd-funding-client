import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaDonate } from 'react-icons/fa';
import { RxUpdate } from 'react-icons/rx';
import { MdDeleteForever } from 'react-icons/md';

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const { email } = useParams();
    const [loading, setLoading] = useState(true);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch(`https://crowd-server-fawn.vercel.app/campaigns/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            });
    }, [email]);

    const today = new Date().toISOString().split("T")[0];
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crowd-server-fawn.vercel.app/campaigns/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    setCampaigns(campaigns.filter((camp) => camp._id !== id));
                    Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
                });

            }
        });
    };

    if (loading) {
        return <div className="text-center py-10"><span className="loading loading-bars loading-lg"></span></div>;
    }
    return (
        <div className="max-w-6xl mx-auto my-12 p-6 bg-gray-50 shadow-lg rounded-xl">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">My Campaigns ({campaigns.length})</h2>
            {campaigns.length ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="p-3">Serial</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Type</th>
                                <th className="p-3">Deadline</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Minimum Donation</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, idx) => (
                                <tr key={campaign._id} className="border-b hover:bg-gray-100">
                                    <td className="p-3 text-center">{idx + 1}</td>
                                    <td className="p-3 text-center font-semibold text-blue-700">{campaign.campaign_title}</td>
                                    <td className="p-3 text-center">{campaign.campaign_type}</td>
                                    <td className="p-3 text-center">{campaign.deadline}</td>
                                    <td className={`p-3 text-center font-bold ${today > campaign.deadline ? "text-red-600" : "text-green-600"}`}>{today > campaign.deadline ? "Closed" : "Active"}</td>
                                    <td className="p-3 text-center">${campaign.minimum_donation}</td>
                                    <td className="p-3 flex justify-center space-x-2">
                                        <Link to={`/campaignDetails/${campaign._id}`} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"><FaDonate /></Link>
                                        <Link to={`/updateCampaign/${campaign._id}`} className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"><RxUpdate /></Link>
                                        <button onClick={() => handleDelete(campaign._id)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700"><MdDeleteForever
                                         /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-red-500">No campaigns running</p>
            )}
        </div>
    );
};

export default MyCampaign;