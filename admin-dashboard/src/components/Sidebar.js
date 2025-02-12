import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Ensure CSS file exists

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>
          <Link to="/beauty-consult">💄 AI Beauty Consulting</Link>
        </li>
        <li>
          <Link to="/vr-tryon">🎭 Virtual Try-On</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
