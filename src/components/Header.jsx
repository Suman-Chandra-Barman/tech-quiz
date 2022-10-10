import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/topics">Topics</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  );
};

export default Header;
