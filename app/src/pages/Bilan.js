import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { TbArrowNarrowUp } from "react-icons/tb";

function Bilan({ setPage }) {
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
        <h1>Bilan</h1>
      </div>
      <div className="sousEtatArt">
        <h2>Acquis Pédagogiques</h2>
      </div>
      <div className="planVertContent">
        <div className="planVertContentText">
          <p>
            <ol>
              <li> - Recherche sur un thème spécifique (État de l'art)</li>
              <li> - Conception Centrée Utilisateur</li>
              <li> - Utilisation du logiciel Figma</li>
              <li> - Utilisation de la bibliothèque React et de CSS</li>
            </ol>
          </p>
        </div>
        <div>
          <img
            className="planVertImage"
            src="./img/pédagogie.svg"
            width="70%"
            alt="Image représentant les acquis pédagogiques"
          />
        </div>
      </div>

      <div className="sousEtatArt">
        <h2>Difficultés rencontrées</h2>
      </div>

      <p>
        Durant nos tests, nous avons rencontré des difficultés avec la maquette
        papier en raison du grand nombre de pages à remettre à l'utilisateur. De
        plus, la gestion des tests était complexe : l'une d'entre nous
        distribuait les feuilles et vérifiait la justesse des réponses tandis
        que l'autre observait et prenait des notes.
      </p>
      <p>
        L'utilisation de Figma s'est avérée parfois un peu difficile, notamment
        en ce qui concerne la gestion de la police d'écriture qui ne pouvait pas
        être mise en gras ni agrémentée d'aucun effet de style. Nous avons donc
        dû changer l’ensemble de la police lorsque nous nous en sommes rendu
        compte à la fin du projet.
      </p>
      <p>
        Au niveau du prototype, nous avons rencontré des problèmes : certaines
        informations présentes sur la maquette ne s'affichaient pas
        correctement, telles que les titres ou les encadrés. Il fallait parfois
        les déplacer un peu afin qu’elles s’affichent correctement.
      </p>
      <p>
        Enfin, dans le processus de développement de l'application, nous avons
        dû faire des choix. Nous avions pensé à ajouter certaines
        fonctionnalités dans la maquette grâce aux retours des utilisateurs lors
        des tests du premier semestre. Ces fonctionnalités ont d'ailleurs été
        parfois proposées par les utilisateurs après avoir testé la maquette sur
        Figma. Or, nous devions prendre des décisions : il reste à voir si elles
        sont pertinentes ou non. Il serait nécessaire que de nombreuses
        personnes utilisent l'application sur le long terme pour en évaluer
        l'efficacité.
      </p>
      <p>
        Concernant le site, il a entièrement été codé par nous même, un défi de
        taille qui a nécessité beacoup de rigueur. Créer un site de A à Z sans
        structures prédéfinies et en veillant à maintenir un ordre suffisant
        pour intégrer toutes les informations pertinentes n’a pas été une tâche
        facile mais nous a permis une fois fini d'acquérirde réelles compétences
        en développement web.
      </p>
      <div className="sousEtatArt">
        <h2>Bilans personnels</h2>
      </div>
      <h2>Zoé</h2>
      <p>
        “J’ai choisi le sujet NORD comme projet transdisciplinaire parce que le
        sens de l'orientation m’a toujours intéressée. J’ai l’habitude de faire
        de la randonnée l’été et j’aime lire des cartes ou regarder des plans de
        villes. J’ai eu envie de réaliser ce projet car je me demande souvent
        pourquoi est-ce que certains de mes proches me disent avoir un très bon
        sens de l’orientation tandis que d’autres se perdent quasiment tout le
        temps. Suite à nos recherches, je comprends mieux en quoi la vie
        quotidienne de chacun, les habitudes, les passions et la vie passée
        influent sur le sens de l'orientation. Cependant, le fait de constater
        que les différences entre les estimations du sens de l’orientation de
        chacun sont parfois très grandes entre deux individus ayant des
        expériences plus ou moins similaires me fascine toujours. J’aimerais me
        renseigner davantage.
      </p>
      <p>
        Ma partie préférée du projet a sans doute été de faire passer des
        entretiens en décembre à propos du sens de l’orientation de mes proches
        et de leurs pratiques pour se repérer. Je ne pensais pas que ce serait
        le cas, mais j’en ai beaucoup appris à propos de ma famille, de leur
        façon de s’orienter quand ils étaient plus jeunes, de leurs craintes et
        de leurs à priori.
      </p>
      <p>
        Avant ce projet, quand je m'orienterais, j’imaginais tout le temps la
        ville ou l'endroit dans lequel j’étais vu de haut dans ma tête, comme si
        c’était une carte. Maintenant que ce projet est terminé, je pense
        également souvent aux distances que je parcours lorsque je marche. Je
        pense que ce que ce projet m’a apporté est la prise de conscience qu’il
        existe un grand nombre de différents moyens pour s’orienter. Le fait
        d’avoir fait prendre conscience à notre entourage que nous faisions un
        projet à propos du sens de l’orientation est, je pense, le plus
        important, car cela a suscité en eux de l'intérêt et c’est l’essentiel.
        C’est peut-être suffisant pour améliorer son sens de l'orientation
        finalement, je ne sais pas. De plus, ma note au Santa Barbara Test est
        devenue meilleure entre le début et la fin du projet (je suis passée de
        5.9/7 à 6.2/7). Le fait de penser au sens de l’orientation
        quotidiennement est certainement bénéfique en tout cas : c'est ce que
        j’ai compris grâce à ce projet qui fut très enrichissant.”
      </p>
      <h2>Clara</h2>
      <p>
        "Le projet NORD a été très enrichissant et m'a permis de développer de
        nouvelles compétences, tant techniques que personnelles. J'ai approfondi
        mes connaissances sur l'orientation, comprenant mieux comment les
        individus perçoivent et naviguent dans l'espace. J'ai également pris
        conscience des stéréotypes et des biais liés à ce sujet, et j'ai appris
        à les aborder de manière critique et réfléchie.
      </p>
      <p>
        Ce projet m'a également permis de monter en compétence dans le domaine
        la conception centrée utilisateur par le biais d'entretiens et d'un
        questionnaire. Mais également en gestion de projet. J'ai amélioré mes
        compétences en design en utilisant Figma pour créer une maquette. Cet
        outil est maintenant un de mes atouts pour des projets de design UI/UX.
        J'ai aussi renforcé mes compétences en développement web avec React.
        Grâce auquel j'ai appris à créer un site web dynamique.
      </p>
      <p>
        D'un point de vue personnel, au début du projet, mon score au Santa
        Barbara test était d'environ 5. Aujourd'hui, il est passé à 6, ainsi ce
        projet m'a permis de m'améliorer."
      </p>
      <h2>Anoa</h2>
      <p>
        Pour ma part j’ai beaucoup apprécié ce projet, tout d’abord il a été
        très enrichissant et j’ai appris beaucoup de choses sur la navigation,
        le rôle du cerveau dans le repérage dans l’espace et la création de
        cartes cognitives. Ensuite, je pense que le fait d’avoir étalé le projet
        sur deux semestres a permis de traiter différents points en profondeur,
        notamment au niveau des tests utilisateurs. J’ai vraiment pris
        conscience de l’importance de faire des pré-tests et de concevoir des
        wireframes avant de se lancer dans la phase de maquettage numérique.
        Faire passer les tests utilisateurs a aussi été une expérience très
        enrichissante. Je trouve que c’est gratifiant de voir d'autres personnes
        utiliser et tester un produit ou service que l’on a entièrement pensé et
        créé, et encore plus quand on peut recueillir des suggestions
        constructives. En parallèle, j’ai énormément progressé en maquettage sur
        Figma. C’est un outil puissant, mais il faut être vraiment rigoureux et
        méthodique. Sinon, on se retrouve vite avec une maquette qui est peu
        fonctionnelle. J’ai donc appris à faire preuve de patience et de
        précision. Aussi, grâce au projet je me surprends parfois à ne plus
        utiliser mon GPS comme avant et à moins m’en servir (quitte à me
        perdre), j’essaie vraiment de faire attention et de moins l’utiliser ou
        d’être plus attentive à mon environnement. En résumé j’ai beaucoup aimé
        m’investir dans ce projet et j’aimerais vraiment savoir s’il va être
        continué. Ce serait génial de voir le projet arriver à son terme, et
        pourquoi pas y participer encore si l’occasion se présente !
      </p>
      <Footer />
    </div>
  );
}

export default Bilan;
