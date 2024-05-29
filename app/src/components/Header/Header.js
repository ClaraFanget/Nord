import React from "react";
import "./Header.css";

function Header({ setPage }) {
  return (
    <div className="Header">
      <div id="logoLink" onClick={() => setPage("accueil")}>
        <img src="./img/logo.svg" alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
