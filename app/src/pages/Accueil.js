import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { MdSwipeVertical } from "react-icons/md";

function Accueil({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <div id="navbarTelephone">
        <NavBar setPage={setPage} />
        <div id="accueil">
          <div id="textCarte">
            Explorez le monde:
            <br /> avec notre GPS pédagogique, <br /> chaque trajet est une
            leçon !
            <div id="boutonsAccueil">
              <div id="boutonProjet" onClick={() => setPage("projet")}>
                Découvrir le projet
              </div>
              <a
                href="https://www.figma.com/proto/JgyLRj4jwdkRpimt9k15tQ/Maquette-NORD?node-id=67-1788&t=f5BA4juYQzyJbLm4-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A2"
                id="testerMaquette"
              >
                Tester la maquette
              </a>
            </div>
          </div>
          <img
            id="telephone"
            src="./img/telephone.svg"
            alt="Image d'un téléphone la maquette NORD avec un chat"
          />
        </div>
      </div>
      <div id="planVert">
        <div id="planVertTitle">
          <MdSwipeVertical id="iconScroll" />
          <div>Plan vert (loi Grenelle 1-2009)</div>
        </div>

        <div className="planVertContent">
          <img
            className="planVertImage"
            src="./img/planVert.svg"
            alt="Image écologie"
          />
          <div className="planVertContentText">
            <p>
              Notre maquette de GPS pédagogique vise à réduire l'empreinte
              carbone en encourageant des modes de déplacement plus durables et
              respectueux de l'environnement. En fournissant des itinéraires
              optimisés pour la marche, nous incitons les utilisateurs à choisir
              des alternatives à la conduite individuelle. En mettant en avant
              les chemins à faible émission de carbone, les espaces verts et les
              zones piétonnes, nous favorisons des déplacements urbains plus
              écologiques.
            </p>
            <p>
              De plus, notre maquette intègre des fonctionnalités éducatives sur
              les enjeux environnementaux liés à la mobilité urbaine, renforçant
              ainsi la sensibilisation des utilisateurs aux avantages de modes
              de déplacement plus durables. En encourageant des comportements de
              déplacement plus responsables, nous contribuons à réduire la
              pollution atmosphérique, à diminuer la congestion routière et à
              préserver la qualité de l'air pour les générations futures.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Accueil;
