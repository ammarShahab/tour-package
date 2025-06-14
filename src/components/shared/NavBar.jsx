import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/images/logo.png";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";
import { LuMoon, LuSun } from "react-icons/lu";

const NavBar = () => {
  const { user, logOut, setUser, theme, setTheme } = use(AuthContext);
  // const [theme, setTheme] = useState("");
  // console.log(user?.email);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const links = (
    <>
      <NavLink className="text-md py-3 px-2 rounded-lg font-bold" to="/">
        Home
      </NavLink>

      <NavLink
        className="text-md py-3 px-2 rounded-lg font-bold"
        to="/allPackages"
      >
        All Packages
      </NavLink>

      {user && (
        <NavLink
          className="text-md py-3 px-2 rounded-lg font-bold"
          // to={`/my-bookings/${user?.email}`}
          to="/my-bookings"
        >
          My Bookings
        </NavLink>
      )}

      <NavLink
        className="text-md py-3 px-2 rounded-lg font-bold"
        to="/about-us"
      >
        About Us
      </NavLink>
    </>
  );
  return (
    <div
      className={`navbar bg-[#147073] ${
        theme ? "dark" : ""
      } dark:bg-zinc-600 shadow-sm`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-0 sm:gap-2 items-center">
          <img className="w-8 sm:w-16" src={logo} alt="logo" />
          <a className="text-xs sm:text-xl font-extrabold text-[#dedbda] ">
            Trip <span className="text-[#fe8d02]">Nest</span>
          </a>
        </div>
      </div>
      <div className="navbar-center menu menu-horizontal hidden sm:hidden md:hidden lg:hidden xl:block px-1 space-x-4 text-[#dedbda]">
        {links}
      </div>
      <div className="navbar-end space-x-4">
        {/* toggle dark light */}
        <div className="bg-[#fe8d02] rounded-xl w-14">
          <div
            className="bg-[#d4c5bf5c] dark:bg-zinc-
          00 p-1 flex justify-center items-center rounded-xl "
          >
            <button
              onClick={() => setTheme("")}
              className="bg-transparent  hover:bg-[#fe8d02] p-2 rounded-lg dark:text-white text-black"
            >
              <LuSun></LuSun>
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="bg-transparent hover:bg-[#fe8d02] p-2 rounded-lg 
            dark:text-white text-black"
            >
              <LuMoon></LuMoon>
            </button>
          </div>
        </div>
        {user ? (
          <>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      className="btn w-full h-full b-0 p-0 rounded-full overflow-hidden object-cover"
                      src={`${user ? user?.photoURL : ""}`}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/add-package" className="justify-between">
                      Add Package
                    </Link>
                  </li>
                  <li>
                    {user && (
                      <NavLink
                        // className="py-3"
                        to={`/manage-myPackages/${user?.email}`}
                      >
                        Manage My Packages
                      </NavLink>
                    )}
                  </li>
                  <li>
                    <Link to="/" onClick={handleLogOut}>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn btn-active btn-info bg-[#d9cab3] border-0"
            >
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
