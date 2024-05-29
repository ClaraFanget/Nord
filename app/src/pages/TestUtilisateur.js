import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { TbArrowNarrowUp } from "react-icons/tb";

function TestUtilisateur({ setPage }) {
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
        <h1>Tests utilisateurs</h1>
      </div>
      <div className="planVertContent">
        <img
          src="./img/maquettePapier.svg"
          width="50%"
          alt="image de la maquette papier"
        />
      </div>
      <div className="legende">
        Quelques exemples de "vues" de notre maquette papier
      </div>
      <div className="sousEtatArt">
        <h2>Maquette papier</h2>
      </div>
      <p>
        Rapidité et coût : La maquette papier permet de visualiser nos idées
        rapidement et à moindre coût. Avec un simple crayon et du papier, nous
        pouvons esquisser et ajuster nos concepts en quelques minutes.
      </p>
      <p>
        Facilitation de la collaboration : Cette méthode facilite la
        communication au sein de l'équipe. Chacun peut comprendre et commenter
        facilement les propositions, ce qui favorise une discussion constructive
        et des retours immédiats.
      </p>
      <p>
        Détection précoce des problèmes : En testant différentes interactions
        sur papier, nous pouvons identifier et résoudre les problèmes de
        conception dès le début, évitant ainsi des corrections plus coûteuses à
        un stade ultérieur.
      </p>
      <p>
        Transition efficace vers le design numérique : Une fois la maquette
        papier validée, nous pouvons passer à Figma avec une vision claire. Cela
        permet de nous concentrer sur les aspects esthétiques et interactifs,
        optimisant ainsi notre temps et nos ressources.
      </p>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/modification.svg"
            width="70%"
          />
        </div>
        <div className="planVertContentText">
          <p>
            Après avoir effectué des tests utilisateurs sur le campus de Talence
            avec notre maquette papier, nous avons recueilli les retours des
            utilisateurs. Ce sont des étudiants de l’ENSC, âgés de 20 à 22 ans
            et ne présentant aucun handicap particulier. Dans l'ensemble, les
            résultats ont été encourageants : tous les utilisateurs ont réussi à
            appréhender rapidement et facilement le principe de l'application,
            ainsi qu'à trouver les pages nécessaires à l'expérimentation sur la
            maquette.
          </p>
          <p>
            Suite à ces premiers pré-tests, nous avons proposé à notre tuteur de
            se prêter au jeu également : celui-ci a participé à un test
            utilisateur et nous a fourni de nombreux conseils pour la suite de
            notre projet.
          </p>
          <p>
            Afin de réaliser la maquette sur Figma, nous avons pris en compte
            chaque remarque de notre tuteur. Voici donc un récapitulatif des
            ajustements que nous avons apportés.
          </p>
        </div>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            Premièrement, nous avons opté pour un scroll vertical plutôt qu'un
            carrousel, car cette disposition s'avère plus ergonomique pour
            l'utilisateur, favorisant une navigation fluide et intuitive.
          </p>
          <p>
            Nous avons également pris en considération le besoin de supprimer
            les périodes de 15 secondes où l'utilisateur se concentre sur la
            carte. Conscients que notre objectif est plus orienté vers
            l'apprentissage que vers l'évaluation, nous avons donc décidé de
            laisser un temps d'observation infini, permettant à chacun de
            s'approprier pleinement les informations sans contrainte de temps.
          </p>
          <p>
            Concernant le contenu des leçons, nous avons intégré une explication
            préliminaire à chaque début de séance, informant l'utilisateur sur
            les objectifs de la leçon en cours et leur pertinence dans la
            progression générale. De plus, nous veillons à éviter les
            instructions trop directes, préférant engager l'utilisateur dans une
            réflexion sur l'utilité et la pratique des compétences à acquérir.
            De plus, nous mentionnons désormais explicitement que certaines
            leçons peuvent être réalisées par beau temps, en utilisant par
            exemple la position du soleil comme repère supplémentaire.
          </p>
          <p>
            Pour garantir une précision adéquate sans pour autant alourdir le
            processus, nous avons décidé de laisser une marge d'erreur de
            plusieurs dizaines de mètres, supprimant ainsi les distances
            extrêmement précises qui ne sont probablement pas pertinentes dans
            l’apprentissage du sens de l’orientation de manière générale.
          </p>
        </div>

        <div>
          <img
            className="planVertImage"
            src="./img/modification2.svg"
            width="70%"
          />
        </div>
      </div>
      <div className="planVertContent">
        <div>
          <img
            className="planVertImage"
            src="./img/modification3.svg"
            width="70%"
          />
        </div>
        <div className="planVertContentText">
          <p>
            Dans un souci de liberté et de progression personnalisée, nous avons
            abandonné le système de leçons verrouillées, permettant à
            l'utilisateur de choisir la leçon qu’il souhaite réaliser tout en
            maintenant une difficulté progressive. Ainsi, bien que nous
            suggérions un ordre recommandé, nous n'imposons aucune restriction,
            laissant à chacun la liberté de composer son parcours
            d'apprentissage.
          </p>
          <p>
            Chaque étape de chaque leçon est maintenant assortie d'un feedback
            interactif en cas d'erreur, encourageant l'utilisateur à réfléchir
            sur ses propres erreurs à travers des questions telles que "Où
            penses-tu en être ?", ou "De combien estimes-tu t'être trompé ?".
          </p>
          <p>
            En cas d'échec, nous avons également ajusté notre approche,
            permettant à l'utilisateur de reprendre là où il s'est arrêté plutôt
            que de recommencer depuis le début, favorisant ainsi une progression
            plus fluide et motivante.
          </p>
          <p>
            Pour garantir la pertinence du contenu, nous avons retiré toute
            allusion aux points cardinaux dans les leçons qui ne leurs sont pas
            spécifiquement dédiées, offrant ainsi une expérience d'apprentissage
            cohérente et sans distractions superflues.
          </p>
          <p>
            Enfin, nous avons ajouté une page explicative détaillant ce que sont
            les points cardinaux, offrant différents niveaux d'explication pour
            répondre aux besoins et aux niveaux de compréhension de chaque
            utilisateur.
          </p>
        </div>
      </div>
      <div className="sousEtatArt">
        <h2>Maquette Figma</h2>
      </div>

      <p>
        Après la réalisation de la maquette sur le logiciel Figma, nous avons
        effectué de nouveaux tests utilisateurs. L'ensemble de nos sujets sont
        de nouveaux des étudiants de l’ENSC, âgés de 20 à 22 ans et ne
        présentant aucun handicap particulier.
      </p>
      <p>
        Une fois de plus, les étudiants ont réussi à appréhender rapidement le
        principe de l'application et à naviguer aisément vers les pages
        nécessaires sur la maquette. Cependant, du point de vue pédagogique, les
        résultats ont été mitigés : la majorité des utilisateurs ont rencontré
        des difficultés dans l'estimation des distances. Il est intéressant de
        noter que certains se sont tellement investis qu'ils ont verbalisé leurs
        pensées lors de l'utilisation. Par exemple, un utilisateur nous a dit :
        “ça fait 100 mètres là ? ah bon ?”. Nous avons également constaté, lors
        d'un test, que l’utilisateur s’est retourné deux ou trois fois avant de
        prendre une décision quant à la direction qu’il allait emprunter. Les
        gestuelles étaient intéressantes et reflétaient le doute chez
        l'utilisateur. Il serait intéressant de voir à quel point l’application
        pourrait améliorer l’estimation des distances de ces personnes : au bout
        de combien de temps d'utilisation permettrait-elle de constater des
        progrès, au bout de combien de séances de pratique,...
      </p>
      <p>
        De plus, la performance était légèrement meilleure en ce qui concerne
        l'estimation des points cardinaux, mais moyenne lorsqu'il s'agissait de
        combiner les distances et les points cardinaux.
      </p>
      <p>
        Nous avons recueilli le consentement d’un utilisateur afin de pouvoir
        afficher une vidéo d’un test que voici.
      </p>
      <div className="planVertContent">
        <div className="video">
          <video width="40%" controls>
            <source
              src="./video/francois.mp4"
              type="video/mp4"
              alt="vidéo de François qui réalise un test utilisateur"
            />
          </video>
        </div>

        <div className="video">
          <video width="40%" controls>
            <source
              src="./video/francois3.mp4"
              type="video/mp4"
              alt="vidéo de François qui réalise un test utilisateur"
            />
          </video>
        </div>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            Sur le plan de l'interface utilisateur, plusieurs suggestions
            d'amélioration ont été formulées. Certains ont estimé qu'il y avait
            trop de texte sur certaines pages et ont recommandé de mettre en
            relief les informations importantes par le biais de mises en forme
            telles que le gras, la couleur ou l'utilisation de tirets pour
            faciliter la lecture.
          </p>
          <p>
            Les utilisateurs ont également apprécié les contrastes de couleur
            mais ont trouvé les traits des icônes un peu fins. En revanche, les
            emplacements des boutons et la signification des informations
            présentes sur les pages ont été bien compris.
          </p>
          <p>
            Le suivi des compétences et des leçons a été bien reçu, avec une
            progression claire signalée par un changement de couleur.
          </p>
        </div>

        <img
          className="graphique"
          src="./img/10.svg"
          width="40%"
          alt="résultat tests utilisateurs"
        />
      </div>

      <div className="planVertContent">
        <img
          className="graphique"
          src="./img/11.svg"
          width="40%"
          alt="résultat tests utilisateurs"
        />

        <div className="planVertContentText">
          <p>
            Enfin, l'application a été considérée comme un bon outil pour
            enseigner le sens de l'orientation. Plusieurs utilisations ont été
            envisagées : les professeurs pourraient l'utiliser pour organiser
            des sessions de course d'orientation avec leurs élèves, les amateurs
            de randonnée pourraient s'en servir également, et même les personnes
            âgées pourraient l'utiliser pour se déplacer en toute sécurité.
            Cependant, la majorité des utilisateurs pense que l'application
            elle-même n'est pas essentielle dans la vie quotidienne. Mettre les
            photos des graphiques
          </p>
        </div>
      </div>

      <div className="planVertContent">
        <img
          src="./img/zoeTalence.svg"
          width="20%"
          alt="image de zoé à Talence pour la prépartion des tests utilisateurs"
        />
        <img
          src="./img/AnoaZoeTalence.svg"
          width="20%"
          alt="image de zoé et anoa à Talence pour la prépartion des tests utilisateurs"
        />
      </div>

      <div className="legende">
        <br />
        Anoa et Zoé en train de préparer le circuit à suivre à pied sur le
        campus de Talence pour réaliser les tests utilisateurs
      </div>
      <Footer />
    </div>
  );
}

export default TestUtilisateur;
