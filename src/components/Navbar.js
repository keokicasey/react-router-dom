import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to='/'>Home Page</Link>
      <Link to='/about'>About</Link>
      <Link to='/portfolio'>Portfolio</Link>
    </div>
  );
}
