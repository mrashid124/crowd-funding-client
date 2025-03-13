import { FaHandHoldingHeart } from "react-icons/fa";
import { MdGroup, MdOutlineFlag, MdVisibility } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-col items-center mt-12 mb-4">
        <FaHandHoldingHeart className="text-red-500 text-6xl shadow-lg" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <h3 className="uppercase text-blue-500 font-semibold text-xl">
          About CrowdFunding
        </h3>
        <h1 className="text-2xl uppercase text-blue-800 font-bold text-center">
          Empowering Dreams Through Generosity
        </h1>
        <p className="text-lg font-normal text-black/60 w-10/12 text-center">
          CrowdFunding is a powerful platform designed to help individuals and organizations raise funds for personal, creative, or entrepreneurial projects. We connect compassionate donors with inspiring causes to foster positive change. Whether it's a medical emergency, an artistic dream, or a community-driven goal, CrowdFunding bridges the gap to make meaningful support possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 w-10/12 mx-auto">
        <div className="bg-green-100 p-6 rounded-2xl shadow-lg">
          <MdGroup className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">About Team Works</h3>
          <p className="text-gray-600">
            Our dedicated team collaborates tirelessly to ensure campaigners receive the guidance they need. From campaign setup to fundraising tips, our experts are here to support you.
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-2xl shadow-lg">
          <MdOutlineFlag className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-gray-600">
            We aim to create a platform that empowers individuals to turn ideas into reality by connecting them with a network of passionate supporters and backers.
          </p>
        </div>

        <div className="bg-red-100 p-6 rounded-2xl shadow-lg">
          <MdVisibility className="text-red-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="text-gray-600">
            Our vision is to build a global community where generosity knows no bounds, ensuring no dream goes unfulfilled due to financial barriers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
