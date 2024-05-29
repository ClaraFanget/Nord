import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { TbArrowNarrowUp } from "react-icons/tb";

function Questionnaire({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <NavBar setPage={setPage} />
      <div class="bouton_remonter">
        <a href="#logoLink" id="remonter">
          <TbArrowNarrowUp />
        </a>
      </div>
      <div className="etatArt">
        <h1>Entretiens et questionnaire</h1>
      </div>
      <div id="sommaire">
        <ol>
          <li>
            <a href="#1" className="sommaire">
              Profil des participants
            </a>
          </li>
          <li>
            <a href="#2" className="sommaire">
              Phase d'observation
            </a>
          </li>
          <li>
            <a href="#3" className="sommaire">
              Interêt pour le sens de l'orientation
            </a>
          </li>
          <li>
            <a href="#5" className="sommaire">
              Usage des GPS
            </a>
          </li>
          <li>
            <a href="#7" className="sommaire">
              Technologie au service de l'orientation
            </a>
          </li>
          <li>
            <a href="#8" className="sommaire">
              Suggestions proposées
            </a>
          </li>
        </ol>
      </div>
      <div>
        <img id="1" src="./img/1.svg" width="100%" alt="résultats CCU" />
        <img id="2" src="./img/2.svg" width="100%" alt="résultats CCU" />
        <img id="3" src="./img/3.svg" width="100%" alt="résultats CCU" />
        <img id="4" src="./img/5.svg" width="100%" alt="résultats CCU" />
        <img id="5" src="./img/4.svg" width="100%" alt="résultats CCU" />
        <img id="6" src="./img/7.svg" width="100%" alt="résultats CCU" />
        <img id="7" src="./img/6.svg" width="100%" alt="résultats CCU" />
        <img id="8" src="./img/8.svg" width="100%" alt="résultats CCU" />
        <img id="9" src="./img/9.svg" width="100%" alt="résultats CCU" />
      </div>
      <Footer />
    </div>
  );
}

export default Questionnaire;
