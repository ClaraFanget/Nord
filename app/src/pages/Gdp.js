import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function Gdp({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <NavBar setPage={setPage} />
      <div className="etatArt">
        <h1>Gestion de projet</h1>
      </div>
      <div id="GDP">
        <div class="container-itemtext">
          <div
            className="itemGdp"
            onClick={() => setPage("echeancierPrev")}
            text="Écheanciers"
            setPage={setPage}
          >
            <img src="./img/echeancier.svg" width="200px" />
          </div>
          <div class="titre-panel" id="echeanciers">
            <p
              onClick={() => setPage("echeancierPrev")}
              text="Écheanciers"
              setPage={setPage}
            >
              Échéanciers
            </p>
          </div>
        </div>

        <div class="container-itemtext">
          <div
            className="itemGdp"
            onClick={() => setPage("matricePrev")}
            text="Matrices"
            setPage={setPage}
          >
            <img src="./img/matrice.svg" width="200px" />
          </div>

          <div class="titre-panel" id="matrices">
            <p
              onClick={() => setPage("matricePrev")}
              text="Matrices"
              setPage={setPage}
            >
              Matrices d'implication
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gdp;
