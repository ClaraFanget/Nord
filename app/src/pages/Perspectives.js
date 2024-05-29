import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { TbArrowNarrowUp } from "react-icons/tb";

function Perspectives({ setPage }) {
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
        <h1>Perspectives</h1>
      </div>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/continue.svg"
            width="50%"
            alt="image continue"
          />
        </div>
        <div className="planVertContentText">
          <p>
            En ce qui concerne les futures améliorations de notre maquette,
            plusieurs suggestions ont émergé. Ce sont des idées que nous
            pourrions envisager en tant que poursuite du projet.
          </p>
          <p>
            Certaines personnes ont proposé d'afficher le nom du bâtiment ou de
            l'endroit où l'utilisateur se trouve une fois la leçon réussie, afin
            de renforcer sa connaissance du lieu et sa mémoire.
          </p>
          <p>
            D'autres ont suggéré l'ajout de quiz pédagogiques pour rendre les
            textes trop longs plus interactifs et structurés, ainsi que la
            possibilité de consulter une liste des compétences acquises dans le
            profil de l'utilisateur.
          </p>
        </div>
      </div>

      <p>
        Pour encourager une utilisation plus régulière de l'application, des
        idées telles que la possibilité de gagner de l'argent en marchant ou
        l'intégration d'un retour haptique pour guider l'utilisateur ont été
        avancées. De plus, informer l'utilisateur sur les monuments historiques
        environnants et proposer des leçons sur l'utilisation d'une boussole ont
        été suggérés pour enrichir l'expérience.
      </p>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            Enfin, une des suggestions qui a très souvent été proposée serait
            d’intégrer l’application aux GPS que l’on utilise au quotidien, afin
            que les leçons s’appliquent à nos trajets réguliers. Cela
            permettrait aux utilisateurs de se servir de l’application plus
            souvent, sur des trajets empruntés et de probablement trouver un
            intérêt à l’utiliser au quotidien.
          </p>
        </div>
        <div>
          <img
            className="planVertImage"
            src="./img/gps.svg"
            width="50%"
            alt="image gps"
          />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Perspectives;
