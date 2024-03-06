import React from "react";
import profileImg from "../assets/chibiBoy_black.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar sticky top-0 z-[1] shadow-md shadow-black bg-pink-700 text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 text-gray-400 rounded-box w-52"
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link>Groups</Link>
                <ul className="p-2 sub--menu">
                  <li>
                    <Link to='/createGroup'>Create</Link>
                  </li>
                  <li>
                    <Link to='/allGroups'>View</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-2xl">SxiZone</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 list--font">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Groups</summary>
                <ul className="p-2 sub--menu bg-base-200 text-gray-400">
                  <li>
                    <Link to="/createGroup">Create</Link>
                  </li>
                  <li>
                    <Link to="/allGroups">View</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown text-gray-400 dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 shadow shadow-black rounded-full">
                <img alt="Tailwind CSS Navbar component" src={profileImg} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

