import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { TbArrowNarrowUp } from "react-icons/tb";

function Sbt({ setPage }) {
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
        <h1>Santa Barbara Test</h1>
      </div>
      <div className="encadre-container">
        <div id="encadre">
          Les énoncés suivants vous interrogent sur vos capacités, préférences
          et expériences en matière de navigation et d’orientation spatiale.
          Après chaque énoncé, vous devez reporter sur une feuille un chiffre
          pour indiquer votre niveau d'accord avec l'énoncé. Notez « 1 » si vous
          êtes tout à fait d'accord avec l'énoncé, « 7 » si vous êtes tout à
          fait en désaccord, ou un chiffre intermédiaire si votre accord est
          intermédiaire. Notez « 4 » si vous n'êtes ni d'accord ni en désaccord.
        </div>
      </div>
      <div className="encadre-container">
        <div id="likert">
          <p>1. Je suis très doué(e) pour donner des instructions.</p>
          <p>
            2. Je n'ai pas une bonne mémoire de l'endroit où j'ai laissé mes
            affaires.
          </p>
          <p>3. J'évalue très bien les distances.</p>
          <p>4. Mon 'sens de l'orientation' est très bon.</p>
          <p>
            5. J'ai tendance à penser à mon environnement en termes de points
            cardinaux (N, S, E, O).
          </p>
          <p>6. Je me perds très facilement dans une nouvelle ville.</p>
          <p>7. J'aime lire les cartes.</p>
          <p>8. J'ai du mal à comprendre les instructions (pour m’orienter).</p>
          <p>9. Je sais très bien lire les cartes.</p>
          <p>
            10. Je ne me souviens pas très bien des itinéraires lorsque je suis
            passager d'une voiture.
          </p>
          <p>11. Je n'aime pas donner des instructions (pour s’orienter).</p>
          <p>12. Il n'est pas important pour moi de savoir où je me trouve.</p>
          <p>
            13. Pour les longs trajets, je laisse généralement quelqu'un d'autre
            s'occuper de la planification de la navigation.
          </p>
          <p>
            14. Je peux généralement me souvenir d'un nouvel itinéraire après
            l'avoir emprunté une seule fois.
          </p>
          <p>
            15. Je n'ai pas une très bonne 'carte/représentation mentale' de mon
            environnement.
          </p>
        </div>
      </div>
      <div id="scoreContainer">
        <div id="score" onClick={() => setPage("score")} setPage={setPage}>
          Calculer mon score
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Sbt;
