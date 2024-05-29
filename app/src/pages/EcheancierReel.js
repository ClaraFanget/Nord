import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function EcheancierPrev({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <NavBar setPage={setPage} />
      <div className="etatArt">
        <h1>Échéancier réel</h1>
      </div>
      <div className="switchText">
        <p className="titreEch">Echeancier réel</p>
        <img
          src="./img/switchPlein.svg"
          width="90px"
          alt="Échéancier réel"
          onClick={() => setPage("echeancierPrev")}
          text="Écheanciers"
          setPage={setPage}
        />
      </div>

      <img id="gdp" src="./img/echreel.svg" width="1500px" />
      <Footer />
    </div>
  );
}

export default EcheancierPrev;
