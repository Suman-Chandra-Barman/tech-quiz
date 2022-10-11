import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeLink = "bg-red-600 px-3 py-2 rounded btn-ghost normal-case";
  const normalLink = "px-3 py-2 btn-ghost normal-case";
  return (
    <div className=" bg-cyan-500 text-white">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-500 text-white rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/topics/1"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Topics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost normal-case text-xl">
            Tech Quiz
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topics/1"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
