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
        <h1>Échéancier prévisionnel</h1>
      </div>
      <div className="switchText">
        <p className="titreEch">Echeancier previsionnel</p>
        <img
          src="./img/switchVide.svg"
          width="90px"
          alt="Échéancier prévisionnel"
          onClick={() => setPage("echeancierReel")}
          text="Écheanciers"
          setPage={setPage}
        />
      </div>

      <img id="gdp" src="./img/echprev.svg" width="1500px" />
      <Footer />
    </div>
  );
}

export default EcheancierPrev;
