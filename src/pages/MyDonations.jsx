
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import DonationCard from "../components/DonationCard";
import Loader from "../components/Loader";



const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(`https://crowd-server-fawn.vercel.app/myDonate/${user?.email}`);
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, [user]);
  // console.log(donations);

  const myDonations = donations.filter((donation) => donation.user_email === user?.email);
  // console.log(myDonations);

   

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-blue-500 text-center text-2xl font-bold mb-4">My Donations ({myDonations.length})</h2>
      {myDonations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myDonations.map((donation) => (
            <DonationCard key={donation._id} donation={donation} myDonations={myDonations}/>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">You haven't made any donation yet.</p>
      )}
    </div>
  );
};

export default MyDonations;


