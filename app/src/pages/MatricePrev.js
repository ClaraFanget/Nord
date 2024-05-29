import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function MatricePrev({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <NavBar setPage={setPage} />
      <div className="etatArt">
        <h1>Matrice prévisionnelle</h1>
      </div>
      <div className="switchText">
        <p className="titreEch">Matrice previsionnelle</p>
        <img
          src="./img/switchVide.svg"
          width="90px"
          alt="Matrice d'implication previsionnelle"
          onClick={() => setPage("matriceFinale")}
          text="Matrice Finale"
          setPage={setPage}
        />
      </div>
      <img id="gdp" src="./img/matriceprev.svg" width="1300px" />
      <Footer />
    </div>
  );
}

export default MatricePrev;
