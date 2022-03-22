import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <img
        width={100}
        alt="sky logo"
        src="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt556529d1b8bf298d/5edfe30f98e62f38ec84dadd/2020_Sky_Logo.png?downsize=640:*&output-format=jpg"
      />
      <Link to="/">Total Views</Link> |
      <Link to="previousViews">Previous Views</Link> |
      <Link to="ascending">Least Watched</Link> |
      <Link to="descending">Most watched</Link> |
    </nav>
  );
};

export default NavBar;
