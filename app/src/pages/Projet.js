import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function Projet({ setPage }) {
  return (
    <div>
      <Header setPage={setPage} />
      <div id="navbarTelephone">
        <NavBar setPage={setPage} />
        <div className="etatArt">
          <h1>Contexte</h1>
        </div>
        <h2>LE BESOIN</h2>
        <p>
          Lors de déplacements urbains à pied, même dans une ville connue, de
          nombreuses personnes se laissent guider intégralement avec une
          application de navigation (type Google Maps). Ces applications sont
          efficaces et facilitent les déplacements de leurs utilisateurs qui
          souvent déclarent avoir un piètre sens de l’orientation. La
          navigation, en psychologie, est la capacité d’un être vivant à trouver
          son chemin dans l’espace (réel ou virtuel). Elle fait intervenir la
          planification, la vision dans l’espace, la mémoire, la coordi- nation
          perceptivo-motrice : c’est une activité de haut niveau cruciale d’un
          point de vue de l’évolution pour le chasseur-cueilleur que nous
          sommes. L’Homme y a ajouté la faculté de représenter l’environnement
          en deux dimension avec une vue de dessus, orientée au nord (la carte)
          et depuis quelques années, cette carte positionne de façon instantanée
          l’utilisateur et s’oriente automatiquement dans le sens du mouvement.
          Alors qu’il n’est plus nécessaire de se perdre ou de réfléchir pour
          retrouver son chemin avec un GPS, qu’advient-il de notre sens de
          l’orientation ? Comme toute compétence, elle s’acquiert en se trompant
          et elle se dégrade si elle n’est pas utilisée. Naviguer, c’est
          accepter de se perdre.Tout comme l’apprentissage du calcul mental n’a
          pas disparu avec l’invention de la calculatrice, on peut penser le
          sens de l’orientation devrait pouvoir être préservé a minima chez
          l’être humain et pas entièrement délégué à une machine, mais il est
          possible d’exploiter ce formidable outil que sont les applications GPS
          pour faire travailler progressivement le sens de l’orientation, de
          manière pédagogique, graduée et contextuelle. Le but de ce projet est
          de concevoir une application GPS pour piéton qui puisse autonomiser
          petit à petit son utilisateur, lui apprenne à se perdre et à retrouver
          son chemin, dédramatise les situations d’échec et lui parle tant en
          termes d’orientation relative (« à droite après l’église ») qu’absolue
          (« prendre au nord »).
        </p>
        <h2>NOTRE SOLUTION </h2>
        <p>
          Pour répondre aux attentes du client pour ce projet
          transdisciplinaire, nous avons décidé de concevoir une maquette
          d’application GPS pédagogique pour les utilisateurs souhaitant
          améliorer leur sens de l’orientation. La conception de celle-ci est
          basée sur le besoin de l'utilisateur qui a été recueilli au préalable
          grâce à une méthode de conception centrée utilisateur.
        </p>
        <h2>L'ÉQUIPE</h2>
        <p>Notre client Victorien MARCHAND</p>

        <div className="planVertContent">
          <div className="photoPerso">
            <img className="photoNous" src="./img/zoe.svg" alt="Photo Zoé" />{" "}
            Zoé
          </div>
          <div className="photoPerso">
            <img
              className="photoNous"
              src="./img/clara.svg"
              alt="Photo Clara"
            />
            Clara
          </div>

          <div className="photoPerso">
            <img className="photoNous" src="./img/anoa.svg" alt="Photo Anoa" />
            Anoa
          </div>
          <div className="photoPerso">
            <img
              className="photoNous"
              src="./img/manea.svg"
              alt="Photo Manea"
            />
            Manea
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projet;
