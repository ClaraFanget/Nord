import React, { useState } from "react";
import "./App.css";

import Accueil from "./pages/Accueil";
import Sbt from "./pages/Sbt";
import Gdp from "./pages/Gdp";
import EtatArt from "./pages/EtatArt";
import CCU from "./pages/CCU";
import Bilan from "./pages/Bilan";
import Application from "./pages/Application";
import EcheancierReel from "./pages/EcheancierReel";
import EcheancierPrev from "./pages/EcheancierPrev";
import MatricePrev from "./pages/MatricePrev";
import MatriceFinale from "./pages/MatriceFinale";
import TestUtilisateur from "./pages/TestUtilisateur";
import Questionnaire from "./pages/Questionnaire";
import Perspectives from "./pages/Perspectives";
import Projet from "./pages/Projet";
import Score from "./pages/Score";

function App() {
  const [page, setPage] = useState("accueil");
  return (
    <div className="app">
      {page === "accueil" && <Accueil setPage={setPage} />}
      {page === "sbt" && <Sbt setPage={setPage} />}
      {page === "gdp" && <Gdp setPage={setPage} />}
      {page === "etatArt" && <EtatArt setPage={setPage} />}
      {page === "ccu" && <CCU setPage={setPage} />}
      {page === "bilan" && <Bilan setPage={setPage} />}
      {page === "application" && <Application setPage={setPage} />}
      {page === "echeancierReel" && <EcheancierReel setPage={setPage} />}
      {page === "echeancierPrev" && <EcheancierPrev setPage={setPage} />}
      {page === "matricePrev" && <MatricePrev setPage={setPage} />}
      {page === "matriceFinale" && <MatriceFinale setPage={setPage} />}
      {page === "testUtilisateur" && <TestUtilisateur setPage={setPage} />}
      {page === "questionnaire" && <Questionnaire setPage={setPage} />}
      {page === "perspectives" && <Perspectives setPage={setPage} />}
      {page === "projet" && <Projet setPage={setPage} />}
      {page === "score" && <Score setPage={setPage} />}
    </div>
  );
}

export default App;
