import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { TbArrowNarrowUp } from "react-icons/tb";

function Application({ setPage }) {
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
        <h1>L'application</h1>
      </div>
      <div className="sousEtatArt">
        <h2>Remarques générales</h2>
      </div>

      <p>
        Lors du processus de conception de la maquette, nous avons accordé une
        attention particulière à l’harmonisation entre l'aspect visuel et
        l'expérience utilisateur pour créer une interface attrayante et simple
        d’utilisation.
      </p>
      <p>
        Dans cette optique, nous avons décidé d'opter pour une palette de
        couleurs distinctes, avec le rouge bordeaux en tant que teinte
        principale. Cette couleur a été choisie pour refléter subtilement
        l'aiguille qui indique le Nord sur les boussoles, tout en conservant une
        certaine sobriété par rapport à un rouge plus vif. Ensuite, le jaune
        pastel a été sélectionné pour sa chaleur et sa neutralité, créant ainsi
        un contraste harmonieux avec le Bordeaux.
      </p>
      <p>
        Dans un souci d'accessibilité et de convivialité, nous avons adopté un
        ton informel en nous adressant directement aux utilisateurs et en les
        tutoyant tout au long de l'expérience. Cette approche a été choisie
        après une analyse attentive, et aucun retour négatif n'a été enregistré
        jusqu'à présent. De plus la forme des cadres et des boutons sont assez
        arrondies, pour ne pas être trop sévères
      </p>
      <div className="sousEtatArt">
        <h2>Description détaillée</h2>
      </div>

      <p>
        Pour assurer la cohérence avec l'identité visuelle du site web, nous
        avons intégré le même logo sur la page de connexion de l'application.
        Cela permet d'offrir une expérience homogène aux utilisateurs.
      </p>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/p1.svg"
            width="50%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
        <div className="planVertContentText">
          <p>
            En ce qui concerne la disposition des éléments, nous avons
            privilégié la simplicité et l'intuitivité.
          </p>
          <p>
            La page de connexion possède une interface épurée, avec des champs
            clairs pour l'adresse e-mail et le mot de passe, ainsi qu'un bouton
            "Se connecter" facilement identifiable. Cette approche minimaliste
            vise à faciliter l'accès à l'application, en réduisant toute forme
            de confusion pour les utilisateurs.
          </p>
        </div>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            En ce qui concerne la structure de l'application, nous avons intégré
            une page d'accueil qui offre des conseils et des informations utiles
            à chaque connexion. Cette page, qui se renouvelle à chaque visite,
            vise à offrir une expérience personnalisée et engageante dès le
            départ.
          </p>
        </div>
        <div>
          <img
            className="planVertImage"
            src="./img/p2.svg"
            width="50%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
      </div>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/p3.svg"
            width="47%"
            alt="Screenshot de la maquette NORD"
          />
          <img
            className="planVertImage"
            src="./img/p4.svg"
            width="50%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
        <div className="planVertContentText">
          <p>
            L'ergonomie de l'application a également été pensée pour faciliter
            la navigation. Les en-têtes de chaque page comprennent le titre de
            la page, une flèche de retour pour une navigation aisée, ainsi
            qu'une icône permettant de revenir à l'accueil ou d'accéder au
            profil de l'utilisateur. Il nous a paru pertinent de faire
            apparaître en majorité la maison pour revenir à l’accueil, qui est
            beaucoup plus simple pour revenir au tout début plutôt que d'appuyer
            de nombreuses fois sur la flèche de retour arrière.
          </p>
        </div>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            La page “mes compétences” contient trois composants cliquables et
            qui amènent chacun vers des pages différentes. Le défilement de
            cette page est vertical, plus intuitif qu’un défilement en manège ou
            horizontal. Nous avons choisi de mettre en compétence 3 des
            exercices qui reprennent les deux compétences précédentes, afin de
            faire un apprentissage progressif mais l’utilisateur est libre de
            commencer par la compétence de son choix. Sa position en base de la
            page est juste à titre suggestif.
          </p>
        </div>
        <div>
          <img
            className="planVertImage"
            src="./img/p5.svg"
            width="20%"
            alt="Screenshot de la maquette NORD"
          />
          <img
            className="planVertImage"
            src="./img/p6.svg"
            width="25%"
            alt="Screenshot de la maquette NORD"
          />
          <img
            className="planVertImage"
            src="./img/p7.svg"
            width="25%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
      </div>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/p8.svg"
            width="50%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
        <div className="planVertContentText">
          <p>
            Cliquer sur une compétence amène à une redirection vers une page de
            présentation qui explique à l’utilisateur l’utilité de travailler la
            compétence qu’il vient de choisir et ses applications dans la vie
            quotidienne. Même si nous avons essayé de faire une explication
            assez compacte, l’utilisateur peut passer à la suite s’il le
            souhaite. Il nous a tout de même paru important d’ajouter une petite
            page d’explication assez générale avant de commencer les leçons afin
            de renforcer la crédibilité et l’utilité de chaque leçon.
          </p>
        </div>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            La page suivante est une liste de toutes les leçons disponibles. Au
            niveau graphique, nous avons de choisi de colorer les boutons en
            fonction de l’état de la leçon si la leçon n’a pas été commencée ou
            n’a pas été terminée jusqu’au bout, le bouton est de couleur
            jaune/orangée et un petit icône sablier est présent sur le côté
            gauche, pour signifier que la leçon n’est pas terminée. Par
            ailleurs, si la leçon a été terminée jusqu’au bout, la couleur du
            bouton passe au vert et un icône de validation apparaît sur le côté
            droit du bouton.
          </p>
          <p>
            Évolution des leçons : Dans le même esprit de créer une progression
            logique entre les leçons, plus l’utilisateur avance dans les leçons
            plus le niveau de complexité augmente. Cependant, l’utilisateur est
            libre de commencer par la leçon de son choix. Toutes les leçons sont
            accessibles à tout moment, il n’y a pas de leçons verrouillées qui
            se débloquent avec la progression.
          </p>
        </div>
        <div>
          <img
            className="planVertImage"
            src="./img/p9.svg"
            width="50%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
      </div>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/p10.svg"
            width="50%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
        <div className="planVertContentText">
          <p>
            De manière générale, les leçons sont assez courtes. Le début de
            chaque leçon est marqué par une page de présentation très rapide des
            objectifs et de ce qui va être fait dans la leçon afin d’expliquer
            les attendus de la leçon. L’utilisateur accède après à une page lui
            présentant les instructions de départ afin que l’utilisateur
            comprenne du premier coup de ce qu'il a à faire et ce qui va lui
            être demandé.
          </p>
        </div>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            Ensuite, l’utilisateur reçoit une instruction et doit se déplacer ou
            répondre à une question en fonction de ce qui lui est demandé. Il
            peut au préalable être invité à consulter une carte avant de
            réaliser la leçon afin de repérer un maximum d'informations (qui
            l’aideront par la suite). Il y a une ou deux pages maximum.
          </p>
        </div>
        <div>
          <img
            className="planVertImage"
            src="./img/p11.svg"
            width="25%"
            alt="Screenshot de la maquette NORD"
          />
          <img
            className="planVertImage"
            src="./img/p12.svg"
            width="25%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
      </div>

      <p>
        Vérification : l’idée serait d’intégrer l'application NORD dans une
        application GPS ou au moins que l’application ait accès à la
        localisation de l’utilisateur pour vérifier ses déplacements et savoir
        s’il se déplace dans les bonnes directions lors des leçons. Comme nous
        n’en sommes qu’au maquettage, nous avons dû mettre une version
        “manuelle” de la vérification des résultats. C’est pourquoi un ou deux
        bouton(s) “croix” et un bouton “valider” apparaissent en bas de la page.
      </p>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/p13.svg"
            width="50%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
        <div className="planVertContentText">
          <p>
            Si l’utilisateur répond correctement à la question ou est arrivé au
            bon endroit, alors il arrive sur une page de validation (composant à
            fond vert), lui indiquant qu’il peut passer à la page suivante.
          </p>
          <p>
            Lorsque une leçon est terminée, celle-ci passe au vert dans la page
            qui liste toutes les leçons. De plus, le sablier à gauche disparaît
            et un symbole de validation apparaît.
          </p>
        </div>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            Dans le cas contraire, il arrive sur une page “dommage” (composant à
            fond rouge) lui indiquant qu’il a fait une erreur et précisant
            quelle est son erreur (mauvaise réponse, s’il s’est déplacé trop
            loin ou pas assez loin…). De plus, sur chaque page d’erreur nous
            avons choisi d’ajouter une sorte de feed-back interactif : une
            question est posée à l’utilisateur afin qu’il s’interroge et évalue
            sa propre erreur.
          </p>
        </div>
        <div>
          <img
            className="planVertImage"
            src="./img/p14.svg"
            width="25%"
            alt="Screenshot de la maquette NORD"
          />
          <img
            className="planVertImage"
            src="./img/p15.svg"
            width="25%"
            alt="Screenshot de la maquette NORD"
          />
        </div>
      </div>

      <p>
        Il peut par la suite appuyer sur le bouton “Réessayer” et est
        automatiquement redirigé vers une instruction similaire à celle qu’il
        vient de terminer (même niveau de difficulté) afin qu’il puisse
        recommencer. Cependant, l’utilisateur reprend depuis sa position
        actuelle, il n’a pas à tout commencer depuis le début. L'utilisateur
        recommence tant qu’il le décide ou jusqu'à ce qu’il abandonne la leçon
        ou la réussisse.
      </p>
      <div className="sousEtatArt">
        <h2>Bilan sur l'application</h2>
      </div>

      <p>
        Nous avons dû opérer des choix, et parmi ceux-ci, nous avons privilégié
        l'estimation des distances et l'orientation selon les points cardinaux.
        Nous aurions pu opter pour la mémorisation des itinéraires, mais cette
        approche, à long terme, tend à devenir mécanique, surtout pour des
        trajets répétés.
      </p>
      <p>
        Les leçons que nous avons sélectionnées sont pertinentes pour plusieurs
        raisons. D'abord, dans la conception envisagée de l'application, elle
        s'adapterait à notre emplacement géographique précis, permettant ainsi
        un apprentissage nomade, intégré au GPS pour une expérience fluide de
        déplacement tout en apprenant. Le but de ce projet était de tester les
        fonctionnalités pour évaluer la pertinence de nos choix, avec pour
        objectif final d'atteindre cette intégration optimale.
      </p>
      <p>
        Explorer des lieux inconnus nous pousse à puiser des informations sur
        notre environnement, car c'est la seule option disponible. En revanche,
        lorsque nous connaissons la région, cela nous sensibilise aux points de
        repère que nous croisons chaque jour sans vraiment les remarquer. Par
        exemple, les sujets interrogés sont des étudiants qui viennent tous les
        jours de la semaine à l’école, et qui passent à côté ou devant les
        bâtiments A20 et A21 et pourtant lors de l’expérience, nous avons pu
        recueillir des verbatims comme “C’est où le A21, c’est celui-là ?” ou
        encore “Attends mais c’est quoi le A20, il est où ?”
      </p>
      <p>
        Les points cardinaux constituent les repères fondamentaux de
        l'orientation. Bien que leur utilité puisse sembler moindre avec
        l'omniprésence du GPS, notre application s'adresse à ceux qui souhaitent
        justement réduire leur dépendance à celui-ci et apprendre à se fier aux
        repères de leur environnement, encourageant ainsi une plus grande
        attention et une meilleure connaissance du territoire.
      </p>
      <p>
        Quant à l'estimation des distances, elle offre la possibilité de
        développer sa perception de l'espace et d'améliorer sa représentation
        mentale de l'environnement. Elle favorise également la création de
        cartes mentales plus précises et une visualisation plus claire de son
        environnement, contribuant ainsi à une meilleure compréhension de
        celui-ci.
      </p>
      <p>
        Même s’il est possible de remettre en question l'utilité de
        l'application, nous sommes persuadés qu’elle apportera un bénéfice en
        encourageant les utilisateurs à relever des défis personnels et à
        explorer leur environnement par eux-mêmes, ce qui serait déjà une grande
        avancée étant donné que l’orientation est un point sur lequel personne
        n’est vraiment sensibilisé. Peu doivent penser à leur sens de
        l’orientation dans leur vie quotidienne. Ainsi, nous pensons qu’à terme,
        elle pourrait inciter les individus à envisager des alternatives au GPS
        et à se poser des questions telles que "Et si j'essayais de me déplacer
        sans GPS aujourd'hui ?" ou "À quelle distance se trouve cette rue ?".
      </p>
      <Footer />
    </div>
  );
}

export default Application;
