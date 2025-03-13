import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../assets/logo.jpeg";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleToggle = (e) => setTheme(e.target.checked ? "dark" : "light");

    const handleLogOut = async () => {
        await logOut();
        navigate("/");
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/allCampaigns", label: "All Campaigns" },
        { to: "/addCampaign", label: "Add New Campaign" },
        { to: "/myDonation", label: "My Donations" },
        { to: "/about", label: "About Us" },
    ];

    return (
        <div className="bg-blue-700/20 text-[#374151] py-3 sticky top-0 z-50 shadow-md">
            <div className="navbar max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="flex row-span-1 items-center">
                    <img src={logoImg} alt="CrowdCube Logo" className="w-10 md:w-14 rounded-full" />
                    <span className="text-xl md:text-2xl font-bold text-[#2563eb]">Crowd</span><span className="text-red-400 text-xl md:text-2xl font-bold">Funding</span>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>

                <div className={`lg:flex ${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                isActive ? "font-bold text-[#dc2626]" : "text-[#4b5563] hover:text-[#1d4ed8]"
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    {user && (
                        <NavLink
                            to={`/myCampaign/${user.email}`}
                            className={({ isActive }) =>
                                isActive ? "font-bold text-[#dc2626]" : "text-[#4b5563] hover:text-[#1d4ed8]"
                            }
                        >
                            My Campaign
                        </NavLink>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    <label className="cursor-pointer">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "dark"}
                            className="toggle theme-controller bg-gray-300"
                        />
                    </label>

                    {!user ? (
                        <div className="flex gap-3">
                            <Link to="/login" className="btn btn-sm bg-[#1d4ed8] text-white hover:bg-[#2563eb]">Login</Link>
                            <Link to="/register" className="btn btn-sm bg-[#dc2626] text-white hover:bg-[#ef4444]">Register</Link>
                        </div>
                    ) : (
                        <div className="relative group">
                            <img
                                src={user?.photoURL || "/default-avatar.png"}
                                alt="User"
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#1d4ed8] object-cover cursor-pointer"
                            />
                            <div className="absolute hidden group-hover:block bg-white text-[#374151] p-3 rounded shadow-xl right-0 min-w-[150px] border">
                                <p className="text-xs md:text-sm text-center font-bold truncate">
                                    {user?.displayName || "User"}
                                </p>
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-sm w-full mt-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white"
                                >
                                    Log Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
