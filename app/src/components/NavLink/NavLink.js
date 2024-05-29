// NavLink.js
import React from "react";
import "./NavLink.css";

function NavLink({ onClick, text }) {
  return (
    <div onClick={onClick} className="navlink">
      {text}
    </div>
  );
}

export default NavLink;
