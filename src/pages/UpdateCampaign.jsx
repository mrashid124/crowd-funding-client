import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const [loading, setLoading] = useState(true);
    const [campaign, setCampaign] = useState(null);
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://crowd-server-fawn.vercel.app/details/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaign(data);
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedCampaign = {
            image: form.image.value,
            campaign_title: form.campaign_title.value,
            campaign_type: form.campaign_type.value,
            description: form.description.value,
            minimum_donation: form.minimum_donation.value,
            deadline: form.deadline.value,
            user_email: user?.email,
            user_name: user?.displayName,
        };

        fetch(`https://crowd-server-fawn.vercel.app/updateCampaign/${campaign._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedCampaign),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire("Success", "Campaign updated successfully!", "success");
                navigate(-1);
            });
    };

    if (loading) {
        return <div className="text-center py-10"><span className="loading loading-bars loading-lg"></span></div>;
    }
    return (
        <div className="max-w-4xl mx-auto my-12 p-8 bg-gray-50 shadow-xl rounded-lg">
            <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-6">Update Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium text-gray-700">Image URL</label>
                    <input type="text" name="image" defaultValue={campaign.image} required className="w-full border rounded-lg p-2" />
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Campaign Title</label>
                    <input type="text" name="campaign_title" defaultValue={campaign.campaign_title} required className="w-full border rounded-lg p-2" />
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Campaign Type</label>
                    <select name="campaign_type" defaultValue={campaign.campaign_type} required className="w-full border rounded-lg p-2">
                        <option value="personal_issue">Personal Issue</option>
                        <option value="startup">Startup</option>
                        <option value="business">Business</option>
                        <option value="creative_ideas">Creative Ideas</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Description</label>
                    <textarea name="description" defaultValue={campaign.description} required className="w-full border rounded-lg p-2"></textarea>
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Minimum Donation ($)</label>
                    <input type="number" name="minimum_donation" defaultValue={campaign.minimum_donation} required className="w-full border rounded-lg p-2" />
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Deadline</label>
                    <input type="date" name="deadline" defaultValue={campaign.deadline} required className="w-full border rounded-lg p-2" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-900">Update Campaign</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCampaign;