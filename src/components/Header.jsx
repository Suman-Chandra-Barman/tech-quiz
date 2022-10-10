import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeLink = "bg-red-500 px-3 py-1 rounded";
  const normalLink = "px-3 py-1";
  return (
    <div className=" bg-cyan-500 text-white">
      <nav className="flex justify-between items-center max-w-[1100px] mx-auto px-3 py-2">
        <div>
          <NavLink to="/home" className="text-2xl font-bold">
            Tech Quiz
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-3">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/topics"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Topics
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Blog
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
