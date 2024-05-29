import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { TbArrowNarrowUp } from "react-icons/tb";

function EtatArt({ setPage }) {
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
        <h1>État de l'art</h1>
      </div>
      <h2>SOMMAIRE</h2>
      <div id="sommaire">
        <ol>
          <li>
            <a href="#Introduction" className="sommaire">
              Introduction
            </a>
          </li>
          <li>
            <a href="#TypeNavigation" className="sommaire">
              I. L’impact du type de navigation sur le sens de l’orientation
            </a>
          </li>
          <li>
            <a href="#StructuresCorticales" className="sommaire">
              II. Les structures corticales impliquées dans l’orientation
            </a>
          </li>
          <li>
            <a href="#EffetGPS" className="sommaire">
              III. L’effet du GPS sur les capacités d’orientation
            </a>
          </li>
          <li>
            <a href="#InneAcquis" className="sommaire">
              IV. Le sens de l’orientation est-il inné ou acquis ?
            </a>
          </li>
          <li>
            <a href="#EffetAge" className="sommaire">
              V. Les effets de l’âge sur les capacités d’orientation
            </a>
          </li>
          <li>
            <a href="#EffetGenre" className="sommaire">
              VI. L’impact du genre sur le sens de l’orientation
            </a>
          </li>
          <li>
            <a href="#Conclusion" className="sommaire">
              Conclusion
            </a>
          </li>
        </ol>
      </div>
      <h2 id="Introduction">INTRODUCTION</h2>
      <p>
        Se repérer est une des facultés qui revêt une importance cruciale dans
        notre quotidien. C'est une capacité complexe qui englobe la perception
        de l'environnement spatial, la compréhension des directions et la
        capacité à se déplacer efficacement dans un espace donné. Tant sur le
        plan individuel que collectif, le sens de l'orientation influence notre
        manière d'interagir avec le monde qui nous entoure. De la position des
        étoiles ou du Soleil, en passant par les atlas et plus récemment avec
        l’avènement du numérique, les GPS : les moyens pour s’orienter sont
        divers. Que ce soit pour lire les cartes ou lire le ciel, se repérer
        impliquait obligatoirement d’observer son environnement, de retenir les
        lieux ou les indices pour les prochains passages. Cependant, depuis
        l’apparition de la technologie et notamment des GPS, les instructions
        pour se déplacer d’un point à un autre nous sont intégralement données,
        il nous suffit de les suivre.{" "}
      </p>
      <p>
        Tout d’abord, nous avons souhaité définir et comprendre les mécanismes
        corticaux impliqués dans les capacités de navigation. Par la suite, nous
        avons cherché à déterminer l'influence de l'utilisation des GPS sur nos
        aptitudes de navigation et à identifier les éventuelles modifications
        qui pourraient en découler, tant au niveau cortical qu'au niveau
        comportemental.{" "}
      </p>
      <p>
        Dans cet état de l’art, nous verrons dans un premier temps les
        différents types de navigation et leur impact sur le sens de
        l’orientation. Ensuite, nous aborderons une partie centrée sur la
        neurobiologie et les structures corticales impliquées dans
        l’orientation. Dans une troisième partie, nous nous intéresserons au
        potentiel effet du GPS sur les capacités à naviguer. Nous nous
        demanderons ensuite si le sens de l'orientation est une compétence innée
        ou acquise. Enfin, dans les deux dernières parties de cet état de l’art,
        nous nous intéresserons aussi bien aux effets de l’âge qu’aux effets du
        genre sur le sens de l’orientation.
      </p>
      <h2 id="TypeNavigation">
        Impact du type de navigation sur le sens de l’orientation
      </h2>
      <p>
        Le sens de l'orientation peut être défini comme l'aptitude à trouver son
        chemin pour se rendre d’un point de l'espace à un autre (« Sens de
        l’orientation », 2024). La navigation, quant à elle, correspond à
        l’ensemble des techniques qui permettent de calculer ou mesurer la route
        à suivre pour rejoindre un autre point de coordonnées connues
        (« Navigation », 2023).{" "}
      </p>
      <p>
        Il existe deux grands types de navigation. Le premier est la navigation
        dite égocentrée ou égocentrique. Le point de vue égocentré correspond à
        une appréhension de l’environnement qui se fait principalement par la
        perception que l’être humain a directement de celui-ci lorsqu’il s’y
        déplace, c’est-à-dire qu’il est en référence directe avec la position de
        son propre corps dans un espace spécifique, comme par exemple une pièce.
        Le second type de navigation est la navigation allocentrée ou
        allocentrique. Le point de vue allocentré, par opposition au point de
        vue égocentré, n’est pas lié à la position du corps dans l’espace, mais
        permet de d’appréhender l’environnement de façon globale par
        l’utilisation d’indices spatiaux externes. Ce type de navigation est
        souvent comparé à une vue “à vol d’oiseau” ou une “vue de dessus”, comme
        lors de l’utilisation d’une carte (Grison & Gyselinck, 2019). 
      </p>
      <p>
        Lorsqu'une personne explore un nouvel environnement ou réalise un
        itinéraire, elle perçoit et peut garder ou non en mémoire des
        connaissances de type “points de repère”, c’est-à-dire des indices
        particuliers, présents le long d’un itinéraire (exemple : une
        boulangerie, un monument particulier…). Si un individu explore souvent
        de nouveaux endroits ou a contrario, réalise souvent les mêmes trajets,
        les connaissances et les stratégies de navigation qu’il va développer ne
        seront pas les mêmes. {" "}
      </p>
      <p>
        En effet, la navigation égocentrique est notamment utilisée (de façon
        inconsciente) lors d’itinéraires familiers et bien appris. Des
        connaissances de type “trajet” vont alors être mémorisées. Elles
        concernent en particulier la succession des étapes d’un itinéraire,
        incluant l’ordre chronologique des points de repère, les séquences
        d’actions et les directions prises. La navigation égocentrique permet
        alors de renforcer la conscience de la position actuelle par rapport à
        l'environnement. Les informations directes basées sur la position du
        corps peuvent aider à développer une compréhension intuitive de la
        relation entre les mouvements corporels et la navigation ainsi qu'une
        connaissance immédiate de l'environnement. Cela est utile pour se
        repérer rapidement et efficacement dans des zones familières. Elle
        renforce la mémoire spatiale en reliant des repères visuels aux actions
        physiques, contribuant ainsi au sens de l'orientation. Cependant, elle
        ne permet pas ou peu une vision d'ensemble de l'environnement, ce qui
        peut rendre plus difficile la compréhension des liens entre les endroits
        visités. Dans des environnements inconnus, la navigation égocentrée peut
        être source de désorientation.{" "}
      </p>
      <p>
        La navigation allocentrée va quant à elle, permettre d’utiliser les
        points de repère afin de former une carte topographique mentale de son
        environnement. Des connaissances de type “survol” telles qu’une vue
        d’ensemble sur l’environnement (intégrant la position relative des
        points de repères dans l’espace et la distance entre eux) vont être
        mémorisées. Elle favorise donc la compréhension globale de
        l'environnement y compris des connexions entre les différents points de
        repère. Ainsi, elle facilite la planification de trajets, la
        compréhension de la disposition spatiale des lieux et la capacité à
        anticiper les étapes suivantes. Elle renforce la mémoire spatiale en
        encourageant la création de schémas cognitifs d'ensemble. Néanmoins, la
        navigation allocentrée peut être moins intuitive pour certaines
        personnes, en particulier dans des environnements complexes ou lors de
        déplacements rapides.
      </p>
      <p>
        Nous avons choisi de résumer les différentes caractéristiques des deux
        types de navigation sous la forme d’une carte mentale.
      </p>
      <h2 id="StructuresCorticales">
        Les structures corticales impliquées dans l’orientation
      </h2>
      <p>
        Notre cerveau évalue constamment l’endroit où nous sommes en intégrant
        et en comparant différentes informations de notre environnement comme la
        position de notre corps dans l’espace, les stimuli environnementaux ou
        encore le temps qui s’écoule. Cette comparaison entre les différents
        signaux s’appelle l’intégration multisensorielle. Elle consiste en une
        mise en commun des informations et des signaux afférents, envoyés par
        plus de deux récepteurs sensoriels, mettant en jeu des sens différents,
        ainsi que leur traitement par le système nerveux central. Cette
        intégration permet de renseigner le SNC sur la position des objets dans
        l’environnement, de la position du corps dans l’espace et de l’état
        corporel avant, pendant et après un mouvement (Rousseau, 2016).Elle
        permet également d’actualiser la représentation du corps dans son
        environnement à tout instant (Barbiero, 2022; Rousseau, 2016).
      </p>
      <p>
        Chez les jeunes adultes, les tâches de navigation activent un réseau
        cérébral dit « central », impliqué dans la navigation spatiale. Ce
        réseau met en jeu certaines régions du lobe temporal et du lobe
        pariétal. En effet, il semblerait que la navigation active, dans un
        premier temps, des zones telles que le cortex rétrosplénial situé dans
        le lobe pariétal médian et le cortex pariétal postérieur, qui
        permettrait de coder pour les représentations spatiales égocentriques.
        Or, pour que la navigation dans l’environnement soit réussie, le cerveau
        doit coordonner les cadres de référence égocentriques avec les cadres de
        référence centrés sur l'environnement (allocentriques) (Zacks &
        Michelon, 2005).  Des travaux récents ont suggéré qu'une telle
        coordination est possible grâce à des interactions entre le cortex
        pariétal postérieur et le cortex rétrosplénial. 
      </p>
      <p>
        Dans le lobe temporal du cerveau, se trouve une structure nommée
        hippocampe, qui joue un rôle crucial dans la navigation spatiale ainsi
        que dans la cartographie mentale que nous dressons de notre
        environnement. D’après une étude de M-B. Moser, E. Moser et J.O’Keefe,
        effectuée sur une population de rats, deux types de cellules semblent
        indispensables à l’orientation : les cellules de lieu, situées dans
        l'hippocampe et les cellules de grille, qui se trouvent dans le cortex
        entorhinal, à côté de l’hippocampe. 
      </p>
      <p>
        Une liaison réussie entre entre le cortex pariétal postérieur et le
        cortex rétrosplénial active ces cellules spécialisées dans
        l’orientation, situées dans l’hippocampe. En plus des informations
        égocentriques apportées par le le cortex pariétal postérieur et le
        cortex rétrosplénial, l’activation de ces deux types de cellules
        nécessitent aussi la perception d’éléments sensoriels provenant de
        l’environnement. Ces stimuli vont servir à la création des
        représentations allocentriques. Ces signaux peuvent être par exemple des
        stimuli visuels de l’environnement qui nous entoure (pour 20% pour les
        cellules de grille) ou des stimuli somesthésiques, perçus grâce aux
        capteurs internes du mouvement comme la tension musculaire ou encore
        l'orientation de la tête (pour 80% pour les cellules de grilles). La
        tension musculaire est détectée par le système proprioceptif, qui met en
        jeu des récepteurs qui sont sensibles à la contraction et à l’étirement
        musculaire ou à la charge. Ces récepteurs sont, entre autres, les
        fuseaux neuromusculaires, les organes tendineux de Golgi ou les
        articulations (Rousseau, 2016). Ensuite, le maintien de l’équilibre et
        la détection de la position de la tête est possible grâce au système
        vestibulaire, dont les capteurs sont localisés dans une partie de
        l’oreille interne, différente de celle dévolue à l’audition, appelée le
        labyrinthe. Ce système détecte les mouvements de la tête pendant la
        locomotion et du fait de ses connexions avec les structures motrices,
        participe au contrôle de la posture et à la coordination des mouvements
        réflexes des yeux et de la tête (Bonnet & Lestienne, 2003). 
      </p>
      <p>
        Cependant, en fonction des stimuli sensoriels provenant de
        l’environnement, les cellules de grille et les cellules de lieu ne sont
        pas activées de la même façon : les cellules de lieu s’activent
        lorsqu’on se trouve à un endroit précis. La connaissance des mécanismes
        du codage de l’information spatiale au niveau de l’hippocampe a
        rapidement progressé ces dernières années : le développement de
        techniques d’enregistrement extracellulaires permet de connaître
        l’activité de nombreuses cellules simultanément chez l’animal éveillé en
        mouvement. Cependant les mécanismes intracellulaires à l’origine de la
        décharge spécifique des « cellules de lieu » restent peu connus
        (Epsztein, 2010).  
      </p>
      <p>
        En revanche, les cellules de grille, lorsqu’elles sont activées,
        permettent de créer une représentation mentale de l'environnement en
        deux dimensions, comme une sorte de plan en forme d’hexagone et dans
        lequel on évolue. Ces représentations se modifient et s’affinent au
        cours du temps. En effet, leur création et leur renforcement dépendent
        de nos souvenirs et de nos expériences. 
      </p>
      <p>
        Cette étude ayant été menée sur des rats, il est alors très probable que
        les résultats soient applicables à l’être humain. 
      </p>
      <p>
        L’hippocampe est le centre du soutien de la mémoire spatiale et il
        permet la reconnaissance des points de repère dans un environnement et
        l'identification de détails spécifiques pertinents pour l’emplacement.
        Le cortex parahippocampique, également situé dans le lobe temporal, près
        de l’hippocampe, permet de localiser des objets cibles lors d’une tâche
        de navigation. L’hippocampe et le cortex parahippocampique permettent
        également la formation de cartes cognitives en recevant des informations
        égocentriques et des informations dérivées du mouvement provenant
        d'autres régions corticales. Hippocampe et cortex parahippocampique
        convertissent ces entrées en une représentation allocentrique de
        l’environnement.
      </p>
      <p>
        Ainsi, des lésions dans l’hippocampe, le cortex parahippocampique ou le
        cortex rétrosplénial, entraînent une désorientation topographique
        c’est-à-dire une incapacité à utiliser des points de repère familiers
        pour soutenir l'orientation et la navigation spatiale. L'hippocampe et
        les structures associées génèrent des représentations de la position
        d'un animal dans l'espace et mettent continuellement à jour cette
        position via le déclenchement de réseaux de cellules sensibles à la
        localisation spatiale grâce au mécanisme d’intégration sensorielle.
      </p>
      <h2 id="EffetGPS">Effet du GPS sur les capacités d’orientation</h2>
      <p>
        Lors de l’utilisation du GPS, il apparaît que l’activité neuronale de
        l’hippocampe est beaucoup moins importante que lorsqu'une personne
        choisit son propre trajet. Ainsi, une problématique apparaît au grand
        jour : le GPS endommagerait-il la capacité du cerveau à s’orienter dans
        l’espace ? La question est tout à fait légitime car les connexions
        neuronales sont « plastiques », c’est-à-dire qu’elles peuvent se
        réorganiser au niveau anatomique et fonctionnel en créant de nouvelles
        synapses ou en en supprimant, afin de s’adapter aux conditions
        extérieures. Ainsi, sur le long terme, les neurones et les connexions
        synaptiques liés à une compétence qui n’est plus utilisée peuvent voir
        une diminution de la transduction du message sensoriel, ce qui a pour
        conséquence leur perte de densité ainsi qu’une réduction de leur nombre.
        Ils s’atrophient et peuvent même finir par disparaître (Münzer et al.,
        2006). 
      </p>
      <p>
        Concernant cette problématique, il existe deux théories au sein de la
        communauté neuroscientifique. 
      </p>
      <p>
        La première stipule qu’utiliser le GPS affecterait fortement notre
        capacité à s’orienter dans l’espace. En effet, une carte ou un atlas est
        une représentation de l’environnement dite “allocentrique”, c’est-à-dire
        indépendante du lieu où se trouve la personne. Pour se repérer, la
        personne doit comparer les informations de la carte avec sa position,
        son environnement et trouver son orientation. Cela permet à l’hippocampe
        d’alimenter ses cartes mentales. En revanche, un GPS fournit une
        représentation “égocentrique” de l’environnement, c’est-à-dire qu’il
        indique le chemin à prendre par rapport à l’orientation du corps de la
        personne. De ce fait, le chemin est tout tracé et l’utilisation de
        cartes mentales par l’hippocampe n’a pas ou peu d’intérêt. Cependant,
        aucun cas d’atrophie de l’hippocampe due à une utilisation trop
        fréquente du GPS n’a été découvert à ce jour. 
      </p>
      <p>
        La seconde théorie vient nuancer et compléter la première. En effet,
        s’il est avéré que la navigation GPS ne fait pas travailler
        l’hippocampe, cette lacune pourrait en revanche être compensée. Le GPS
        ferait travailler le cerveau d’une autre manière : une personne qui
        utilise un GPS passerait moins de temps à naviguer dans le monde réel,
        mais plus de temps à naviguer dans le monde virtuel. En effet, si une
        personne connaît très bien la carte numérique du GPS et sait se repérer
        en l’utilisant, cela ferait également travailler l'hippocampe. Il faut
        tout de même noter que cette explication demeure une théorie.  
      </p>
      <h2 id="InneAcquis">Le sens de l’orientation est-il inné ou acquis ?</h2>
      <p>
        Une des premières questions que nous nous sommes posées à propos du sens
        de l’orientation concerne son caractère inné ou acquis.
        Bénéficions-nous, pour certains, du sens de l’orientation dès la
        naissance ? Ou est-il le résultat de l’expérience et de l'entraînement
        sur le long terme ?
      </p>
      <p>
        Le sens de l’orientation n’est en réalité ni complètement acquis, ni
        complètement inné. Ce qui est justement intéressant de constater, c’est
        qu’il joue un rôle plus ou moins important, dans ces deux hypothèses. 
      </p>
      <p>
        Tout d’abord, une grande partie des capacités qui forment le « sens de
        l’orientation » dépendent de facteurs dits « acquis ». L’entraînement
        par le biais d’activités comme la course d’orientation, la randonnée, la
        navigation en mer (et bien d’autres), sont des exemples de facteurs
        d’entraînement. Ils permettent notamment d’améliorer le sens de
        l’orientation. En effet, la plupart mobilisent des capacités telles que
        lire une carte, utiliser une boussole ou encore se repérer grâce à la
        position du Soleil ou des étoiles. 
      </p>
      <p>
        Une étude réalisée par la neuroscientifique Eleanor Maguire en 2000
        démontre que la capacité à s’orienter s’apprend (Roux, 2023). L’étude
        est centrée sur l’utilisation d’images obtenues par imagerie à résonance
        magnétique (IRM). Lors de cette étude, 79 futurs chauffeurs de taxi
        ainsi que 31 personnes qui ne conduisent pas de taxi (mais qui ont le
        même âge, le même niveau d'éducation et la même intelligence que les
        futurs chauffeurs) ont réalisé un IRM. Les futurs chauffeurs de taxi
        conduisent à Londres, connue pour être la ville dans laquelle il est le
        plus difficile de se repérer. L'entraînement réalisé par les futurs
        chauffeurs lors de leur formation pour apprendre à s’orienter à Londres
        a donc été le plus intense possible.
      </p>
      <p>
        Quatre ans plus tard, la neuroscientifique réalise les mêmes mesures et
        ce, sur exactement les mêmes personnes. Elle constate alors que la
        connectivité fonctionnelle de l’hippocampe des chauffeurs est beaucoup
        plus développée que celle des non-chauffeurs : de nouveaux neurones et
        de nouvelles connexions synaptiques ont été créées par plasticité
        cérébrale.
      </p>
      <p>
        Cette étude est un bon exemple pour montrer que la capacité à s’orienter
        dépend de facteurs acquis. Une autre question se pose alors : est-ce que
        les chauffeurs de taxis arrivent à s’orienter aussi bien qu’à Londres
        s’ils se retrouvent dans un autre endroit ? En réalité, il apparaît que
        cela dépend de chacun. En effet, le sens de l’orientation est également
        déterminé par quelques facteurs dits « innés », mais qui seraient
        beaucoup plus difficiles à prouver scientifiquement (Sens de
        l’orientation, s. d.) et représenteraient une petite part comparée à
        celle des facteurs acquis. L’existence de ces facteurs innées pourrait
        alors expliquer pourquoi, parmi plusieurs personnes ayant une expérience
        de l’orientation plus ou moins similaire, certaines déclarent avoir un
        bon sens de l’orientation et d’autres pensent ne pas en bénéficier du
        tout.
      </p>
      <p>
        Ainsi, le sens de l’orientation n’est pas réellement un sixième sens
        mais plutôt la combinaison de plusieurs d’entre eux. C’est en cela qu’il
        dépend notamment de facteurs innés. « Il fait intervenir la vision, le
        système vestibulaire qui nous permet l’équilibre, et le système
        proprioceptif, la position du corps, de nos organes, de nos muscles par
        rapport à notre tête », explique Gilles Clément, chercheur en
        neurosciences à l’Inserm de Lyon (Ouest-France, s. d.).
      </p>
      <p>
        De plus, “ l’individu prend ses repères, analyse la distance, le temps
        et élabore une carte mentale”, détaille le chercheur. Cette carte
        mentale peut être élaborée, soit grâce à des repères visuels, soit parce
        que l’on a étudié la géographie du lieu et que l’on a, en quelque sorte,
        mémorisé le trajet et les directions à prendre. Certaines personnes
        auraient des capacités de traitement spatial plus développées que
        d'autres, ce qui faciliterait la création de cartes mentales de leur
        environnement et leur permettrait de s'orienter plus efficacement.
      </p>
      <p>
        Le chercheur explique que : “Nous suivons alors la direction que notre
        carte spatiale nous a donnée. Parfois on prend la mauvaise direction,
        car on s’était figuré une carte qui n’est pas la bonne. On va alors
        faire un retournement de carte dans notre esprit pour se repérer.”
      </p>
      <p>
        Un second facteur pourrait également avoir un rôle dans le sens de
        l’orientation : il s’agit de la mémoire spatiale. Elle s’acquiert au
        cours de la vie mais dépend de caractéristiques innées. Elle représente
        la capacité à se souvenir des détails de l'environnement et des
        relations spatiales entre les objets. Certaines personnes auraient une
        mémoire spatiale plus développée, ce qui leur permettrait de mémoriser
        des itinéraires, des repères et des orientations plus facilement. De
        plus, la perception de l'environnement n’est pas la même entre les
        différentes personnes. Si certaines sont plus sensibles aux signaux
        environnementaux tels que la perception des variations du relief, des
        variations de la luminosité, des repères visuels, des odeurs ou encore
        des sons, cela pourrait améliorer la qualité de leur représentation
        mentale de l’espace qui les entoure et leur permettrait ainsi de
        s’orienter plus facilement.
      </p>
      <p>
        Enfin, certaines études ont récemment suggéré que des variations
        génétiques pourraient être liées à la perception de la boussole interne,
        qui permet de ressentir la direction du nord magnétique. En effet,
        l’existence magnétorécepteurs fonctionnels chez l’Homme a été démontrée
        et il est possible qu’ils entrent en jeu dans le sens de l’orientation
        (OUTSIDERS, 2020). 
      </p>
      <p>
        Pour conclure et répondre à la problématique que nous nous étions fixée,
        le sens de l'orientation est principalement une compétence acquise grâce
        à l'expérience, à l'apprentissage et à la pratique. Nous pensons qu’il
        est relativement important de noter que les facteurs innés que nous
        avons donnés comme exemple ne garantissent pas nécessairement un bon
        sens de l’orientation. Les éléments clés pour améliorer les compétences
        concernant le sens de l’orientation sont les facteurs environnementaux,
        l'éducation, l'expérience et la motivation. Finalement, n’importe quel
        individu souhaitant améliorer son sens de l'orientation peut le faire
        grâce à la formation et à la pratique, même s'il ne possède pas
        nécessairement des avantages génétiques spécifiques.
      </p>
      <h2 id="EffetAge">Les effets de l’âge sur les capacités d’orientation</h2>
      <p>
        L’âge affecte les performances et l’anatomie fonctionnelle de
        l’hippocampe. En effet, chez le rongeur, il apparaît que les cellules de
        l'hippocampe changent leurs caractéristiques de réponse avec l’âge. Chez
        l’humain, la région temporale médiale, y compris l'hippocampe,
        s'atrophie avec le vieillissement humain et est l'une des premières
        régions touchées dans la maladie d’Alzheimer (Moffat et al., 2006;
        Richmond et al., 2022). Ainsi, par rapport aux jeunes adultes, chez les
        adultes plus âgés en bonne santé, on remarque une activation réduite des
        régions hippocampiques et para hippocampiques pendant les tâches de
        navigation (Richmond et al., 2022).
      </p>{" "}
      <p>
        Or, comme nous l’avons vu auparavant, ces régions jouent un rôle
        essentiel dans la navigation spatiale notamment par la formation de
        cartes cognitives qui sont des représentations allocentriques de
        l’environnement. Ainsi, chez les personnes âgées, il y a une génération
        de représentations allocentriques déficientes. Les résultats de cette
        étude démontrent une altération substantielle liée à l'âge dans les
        réseaux neuronaux soutenant la navigation allocentrique chez l’Homme
        (Moffat et al., 2006; Richmond et al., 2022). 
      </p>
      <p>
        En réalité, le passage à la navigation allocentrique est donc altéré
        chez les personnes âgées, ce qui entraînerait une préférence pour les
        stratégies de navigation égocentriques (Moffat and Resnick, 2002 in
        Hill, 2023). 
      </p>
      <p>
        D’après l’étude de Harris et Wolbers, lors d’une tâche de navigation,
        les jeunes participants passent tous de la stratégie de suivi
        égocentrique à un suivi allocentrique alors que participants plus âgés
        ne vont pas forcément changer de stratégie de navigation. Ainsi, chez
        les personnes âgées, il y aurait une altération au niveau du changement
        de stratégies et du traitement allocentrique (Harris & Wolbers, 2014). 
      </p>
      <p>
        Pour des adultes jeunes en bonne santé, les changements de stratégie de
        navigation sont coordonnés par les régions du cortex préfrontal,
        modulées par un neurotransmetteur : la noradrénaline, produite par le
        locus coeruleus. Comme nous l’avons vu, l’âge entraîne notamment la
        dégénérescence de l’hippocampe et du cortex entorhinal. Ajouté à cela,
        il semblerait qu’il affecte également le locus coeruleus et perturbe le
        fonctionnement des fibres noradrénergiques. Ainsi la réduction de la
        connectivité fonctionnelle entre le réseau de commutation cortex
        préfrontal/noradrénergique et l’hippocampe au cours du vieillissement
        amène à des altérations de commutation de stratégies de navigation
        (Harris & Wolbers, 2014). 
      </p>
      <p>
        Harris et Wolbers ont réalisé une expérience grâce à la réalité
        virtuelle, pour montrer ce déficit de changement de stratégie (de
        égocentrique à allocentrique). Lors de cette expérience, les
        participants jeunes et âgés ont appris de longs itinéraires vers des
        emplacements clés. Leur objectif était d’atteindre ces emplacements le
        plus rapidement possible, peu importe le chemin emprunté. Lors des
        tests, des raccourcis étaient mis à dispositions. Or, même lorsque
        ceux-ci étaient disponibles, certaines personnes âgées ne les empruntent
        pas, et ce, même s’ils ont au préalable été informés qu’il fallait
        emprunter les chemins les plus courts possibles pour se rendre aux
        emplacements. Soit les participants âgés ont réussi à à se faire une
        représentation allocentrique mentale mais n’ont quand même pas utilisé
        les raccourcis, à cause d’une réticence à utiliser une stratégie
        allocentrique, soit leur représentation allocentrique était altérée et
        trop incertaine pour passer à une stratégie d’orientation à cause d’une
        capacité réduite à changer de stratégie. D’autres ont tout de même
        réussi à utiliser un ou plusieurs raccourcis, prouvant que les
        participants âgés sont capables de le faire (Harris & Wolbers, 2014). 
      </p>
      <p>
        Ainsi, les personnes jeunes utilisent les raccourcis en grande majorité
        et passent de manière stable à une stratégie de suivi à une stratégie
        d’orientation (c’est-à-dire non apprise auparavant) alors que personnes
        âgées passent sporadiquement d’une stratégie de suivi à de l’orientation
        (Harris & Wolbers, 2014). 
      </p>
      <p>
        Par conséquent, le maintien de stratégie de navigation égocentrique chez
        les personnes âgées permet d'éviter les itinéraires et lieux inconnus et
        ont un effet néfaste sur utilisation carte cognitive de l’environnement
        (Iaria et al., 2009).
      </p>
      <p>
        En effet, le striatum est la principale structure mise en jeu lorsqu’un
        individu mobilise sa mémoire procédurale, notamment utilisée lors de la
        navigation sur des chemins habituels. En revanche, l’hippocampe
        entretient la mémoire spatiale, utilisée lors de l'orientation en
        utilisant des repères spatiaux dans l’environnement. Puisque les régions
        hippocampiques et para hippocampiques sont affectées par l’âge, il
        semblerait logique que la mémoire spatiale décline au cours du temps.
        Or, lors de l’apprentissage à naviguer dans un nouvel environnement les
        sujets peuvent soit sur-apprendre un itinéraire habituel, faisant alors
        appel à la mémoire procédurale, soit créer carte cognitive, mobilisant
        la mémoire spatiale (Iaria et al., 2009).
      </p>
      <p>
        Les cartes cognitives sont des avantages qui permettent d’atteindre
        n’importe quel emplacement cible par n’importe quel itinéraire et pas
        seulement par un itinéraire habituel. Comparé aux individus jeunes, les
        personnes âgées mettent plus de temps à former une carte cognitive et
        sont moins efficaces pour l’utiliser. L'effet de l’âge sur le traitement
        des cartes cognitives contribue au déclin des compétences de navigation
        (Iaria et al., 2009).
      </p>
      <p>
        Les changements de stratégies de navigation peuvent être également
        corrélées à des difficultés à percevoir, à traiter et à se remémorer les
        points de repères vus lors des trajets, qu’ils soient routiniers ou
        nouveaux. 
      </p>
      <p>
        Les chercheurs Richmond et Lauren, ont réalisé des analyses par la
        méthode d’eye-tracking afin de savoir si les personnes âgées passaient
        plus ou moins de temps à fixer visuellement les repères dans
        l’environnement lors d’une situation d’apprentissage de navigation dans
        un labyrinthe. Or, il s’est avéré que les jeunes adultes et les adultes
        plus âgés ne différaient pas dans la proportion de temps passé à fixer
        visuellement les repères. Ainsi, la préférence de l'âge pour la
        navigation égocentrique observée n'est ni due à un manque d'attention
        aux repères pendant l’apprentissage (Hill, 2023), ni à une incapacité de
        les reconnaître (Richmond et al., 2022).
      </p>
      <p>
        En réalité, elle pourrait être due à deux autres facteurs. Tout d’abord,
        la préférence de navigation égocentrique chez les personnes âgées
        pourrait résulter de difficultés à traiter les indices de repères afin
        de s'orienter dans l’espace. Selon West et al., les stratégies de
        navigation basées sur les repères diminuent de façon linéaire avec l'âge
        (West et al., 2023 in Hill, 2023). ainsi que la capacité à utiliser ces
        éléments pour guider les décisions de navigation appropriées. Cela
        révèle alors des déficits de mémoire associative : les points de repères
        ne sont plus utilisés correctement pour prendre une décision de
        navigation appropriée. Ainsi, la résolution de tâches de navigation
        spatiale dans des environnements familiers est similaire entre les
        jeunes adultes et les personnes âgées. Le déficit de la mémoire
        associative affecte donc principalement l’apprentissage de nouveaux
        trajets ou de nouvelles stratégies de navigation. En effet, dans une
        étude comparant l’apprentissage d’un nouvel environnement virtuel montre
        que les personnes âgées ne se souviennent pas correctement de l’ordre
        des repères le long de la route qui leur ont été présentés (Richmond et
        al., 2022).
      </p>
      <p>
        De plus, les personnes âgées déclarent avoir moins confiance en leurs
        capacités de navigation par rapport aux jeunes adultes et ont en effet
        des performances réduites : ils sont donc indirectement conscients que
        leur cognition spatiale décline. Cela peut être un autre facteur pouvant
        influencer les stratégies employées par les personnes âgées dans les
        tâches de cognition spatiale les amenant à choisir d'utiliser des
        stratégies moins éprouvantes mentalement mais aussi moins efficaces pour
        accomplir des tâches de navigation spatiale (Richmond et al., 2022).
      </p>
      <p>
        Par ailleurs, le choix d’utiliser une navigation allocentrique ou
        égocentrique dépendrait du type de repères présents dans
        l’environnement. Les stratégies allocentriques semblent être favorisées
        lorsque des repères spatiaux sont dits « géométriques » (par opposition
        aux points de repère qui mettent en jeu une navigation plus
        égocentrique). Il semblerait alors que les adultes âgés conservent la
        capacité de s'orienter dans l'espace aussi bien que leurs homologues
        plus jeunes lorsque des repères spatiaux géométriques sont disponibles
        (Hill, 2023).
      </p>
      <h2 id="EffetGenre">L’impact du genre sur le sens de l’orientation</h2>
      <p>
        Les stéréotypes, largement répandus au sein d'une société, influencent
        les comportements et peuvent amener les individus ciblés à adopter des
        conduites conformes à ces stéréotypes. 
      </p>
      <p>
        La menace du stéréotype, définie comme la pression ressentie par un
        individu lorsqu'il risque de confirmer un stéréotype négatif le
        concernant, joue un rôle significatif dans ce processus. En situation
        d'évaluation où un stéréotype est présent, une personne stigmatisée
        craint que sa performance ne renforce le stéréotype, contribuant à faire
        chuter sa performance lors de l’évaluation et ainsi renforcer le
        stéréotype. Des études ont démontré que la menace du stéréotype a des
        effets délétères sur les performances dans divers domaines tels que les
        mathématiques, la conduite automobile, le sport ou encore les jeux
        vidéo. 
      </p>
      <p>
        Une étude  à démontrer que la menace du stéréotype envers les femmes
        concernant leur sens de l’orientation était bien présente. En effet,
        lorsque leur sens de l’orientation était évalué sans pression sociale,
        celui-ci était aussi bon que celui des hommes. En revanche, lorsqu'il
        était précisé que leur résultats seraient comparés à celui des hommes
        dans le but de les différencier on observait une différence
        signification entre les résultats des hommes et ceux des femmes (les
        résultats des femmes étant significativement moins bons que ceux des
        hommes). Cette étude a donc confirmé qu'il n'y a pas de différence innée
        entre les hommes et les femmes en ce qui concerne le sens de
        l'orientation. Au contraire, elle souligne que la croyance largement
        répandue dans la société, selon laquelle une telle différence existe,
        est infondée (Dumesnil et al., 2016).
      </p>
      <p>
        Cependant, nous pouvons nous poser la question de la différence entre
        les hommes et les femmes quant à certains facteurs qui pourraient
        influencer le sens de l’orientation. Par exemple, considérons la
        perception spatiale. Lors d’une étude menée par Cécile ANDRIEUX, il a
        été demandé aux participants de toucher à l’aveugle 6 planches découpées
        en forme de “montagnes russes” afin de parcourir du doigt la découpe des
        planches. Dans la seconde phase de l’expérience, les participants
        devaient, dans un premier temps, observer les planches puis sélectionner
        3 à 4 planches dont le tracé ressemblait à celui qu’ils ont touché. Dans
        un second temps, les participants choisissaient, parmi les 3 ou 4 tracés
        sélectionnés, le tracé exact correspondant à celui qu’ils avaient touché
        durant l’expérience. Ainsi, cette étude a montré que les femmes sont
        moins douées pour la représentation visuelle et la structuration
        spatiale des perceptions kinesthésiques (Andrieux, 1955) .
      </p>
      <p>
        Les recherches sur les différences de sens de l'orientation entre les
        genres suggèrent que les facteurs sociaux, culturels et éducatifs jouent
        un rôle plus significatif que les différences biologiques des sexes. Par
        conséquent, l'idée que les femmes provenant de pays caractérisés par un
        niveau d'éducation élevé auraient un sens de l'orientation supérieur par
        rapport à celles provenant de pays avec un niveau d'éducation moins
        élevé pourrait s'expliquer par le fait que les stéréotypes de genre
        seraient moins remis en question dans ces pays.
      </p>
      <h2 id="Conclusion">Conclusion</h2>
      <p>
        Le cerveau évalue la position du corps et les éléments de
        l'environnement en continu afin d’informer le système nerveux central
        sur l’état du corps et ce qui l’entoure. Le repérage des éléments, leur
        mémorisation et leur restitution permet à un individu de s’orienter ou
        de retrouver son chemin. Cependant, pour que la navigation soit
        efficace, l’hippocampe, structure corticale essentielle dans
        l’orientation, doit pouvoir coordonner les différents cadres de
        références. Il en existe deux : le cadre égocentrique, en référence
        directe avec la position de son propre corps et le cadre allocentrique,
        qui permet de d’appréhender l’environnement de façon globale par
        l’utilisation d’indices spatiaux externes. Ces deux cadres doivent être
        coordonnés afin que la représentation mentale faite par un individu soit
        claire et utilisable pour la navigation. Si cette coordination est
        altérée, les capacités d’orientation sont dégradées. De même, des
        lésions ou une diminution de la connectivité fonctionnelle de
        l’hippocampe peuvent amener à une désorientation. 
      </p>
      <p>
        Les capacités de navigation demeurent tout de même sous l’influence de
        différents facteurs. Tout d’abord, les facteurs socio-culturels,
        éducatifs et les stéréotypes ont un fort impact négatif sur les
        performances de navigation féminines, souvent jugées comme moins
        efficientes que celles des hommes. Ensuite, l’âge peut avoir une
        influence sur les capacités d’orientation. En effet, il apparaît que
        celui-ci entraîne une dégénérescence de la connectivité fonctionnelle de
        l’hippocampe et, par extension, des altérations dans les changements de
        stratégies de navigation et dans la création et l’utilisation de cartes
        cognitives, contribuant ainsi au déclin des compétences de navigation.
        Enfin, l’utilisation de GPS semble réduire l’activité neuronale de
        l’hippocampe non pas en atrophiant mais en le sollicitant d’une autre
        manière. En effet, l'utilisation de GPS encourage la navigation dans le
        monde virtuel égocentrique, alors qu’à l’origine, l’hippocampe apporte
        des informations permettant une représentation allocentrique. 
      </p>
      <Footer />
    </div>
  );
}

export default EtatArt;
