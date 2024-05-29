// NavBar.js
import React from "react";
import "./NavBar.css";
import NavLink from "../NavLink/NavLink";

function NavBar({ setPage }) {
  return (
    <nav className="navbar">
      <NavLink
        onClick={() => setPage("accueil")}
        text="ACCUEIL"
        setPage={setPage}
      />
      <NavLink
        onClick={() => setPage("sbt")}
        text="SANTA BARBARA TEST"
        setPage={setPage}
      />
      <NavLink
        onClick={() => setPage("gdp")}
        text="GESTION DE PROJET"
        setPage={setPage}
      />
      <NavLink
        onClick={() => setPage("etatArt")}
        text="ÉTAT DE L'ART"
        setPage={setPage}
      />
      <NavLink onClick={() => setPage("ccu")} text="CCU" setPage={setPage} />
      <NavLink
        onClick={() => setPage("application")}
        text="L'APPLICATION"
        setPage={setPage}
      />
      <NavLink
        onClick={() => setPage("perspectives")}
        text="PERSPECTIVES"
        setPage={setPage}
      />
      <NavLink
        onClick={() => setPage("bilan")}
        text="BILAN"
        setPage={setPage}
      />
    </nav>
  );
}

export default NavBar;
