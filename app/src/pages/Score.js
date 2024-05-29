import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Likert from "../components/Likert/Likert";
import Footer from "../components/Footer/Footer";

function Score({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <NavBar setPage={setPage} />
      <div className="etatArt">
        <h1>Score</h1>
      </div>
      <div className="encadre-container">
        <div id="encadre">
          <p>
            1. Notez à l'envers tous les items formulés positivement (par
            exemple, "d'accord" signifie que vous pensez que vous êtes bon dans
            quelque chose).
            <br />
            a. Il s'agit des items 1, 3, 4, 5, 7, 9 et 14.
            <br />
            b. La notation inversée signifie que l'item 1 est recodé en 7,
            l'item 2 en 6, l'item 3 en 5, l'item 5 en 3, l'item 6 en 2 et l'item
            7 en 1.
          </p>
          <p>
            2. Calculez ensuite le score moyen pour les 15 items (en utilisant
            les scores inversés pour les items positifs et les scores originaux
            pour les autres items).{" "}
          </p>
          <p>
            3. Le score sera un nombre entre 1 et 7, où 1 signifie un mauvais
            sens de l'orientation et 7 un bon sens de l'orientation.
          </p>
        </div>
      </div>
      <div className="encadre-container"></div>
      <div id="scoreContainer">
        <div id="score" onClick={() => setPage("sbt")} setPage={setPage}>
          Retour au test
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Score;
