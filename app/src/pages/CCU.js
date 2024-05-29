import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function CCU({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <NavBar setPage={setPage} />
      <div className="etatArt">
        <h1>CCU</h1>
      </div>
      <div id="GDP">
        <div class="container-itemtext">
          <div
            className="itemGdp"
            onClick={() => setPage("questionnaire")}
            text="Matrices"
            setPage={setPage}
          >
            <img src="./img/questionnaire.svg" width="200px" />
          </div>
          <div class="titre-panel" id="questionnaire">
            <p
              onClick={() => setPage("questionnaire")}
              text="Matrices"
              setPage={setPage}
            >
              Entretiens/Questionnaire
            </p>
          </div>
        </div>

        <div class="container-itemtext">
          <div
            className="itemGdp"
            onClick={() => setPage("testUtilisateur")}
            text="Matrices"
            setPage={setPage}
          >
            <img src="./img/testUtilisateur.svg" width="200px" />
          </div>

          <div class="titre-panel" id="testUtilisateur">
            <p
              onClick={() => setPage("testUtilisateur")}
              text="Matrices"
              setPage={setPage}
            >
              Tests utilisateurs
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CCU;
