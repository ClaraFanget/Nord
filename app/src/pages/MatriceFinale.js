import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function MatriceFinale({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <NavBar setPage={setPage} />
      <div className="etatArt">
        <h1>Matrice finale</h1>
      </div>
      <div className="switchText">
        <p className="titreEch">Matrice finale</p>
        <img
          src="./img/switchPlein.svg"
          width="90px"
          alt="Matrice d'implication finale"
          onClick={() => setPage("matricePrev")}
          text="Matrice Prev"
          setPage={setPage}
        />
      </div>
      <img id="gdp" src="./img/matricefinale.svg" width="1300px" />
      <Footer />
    </div>
  );
}

export default MatriceFinale;
