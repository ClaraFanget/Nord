// NavBar.js
import React from "react";
import "./Likert.css";

function Likert({ text }) {
  return (

    <div class="likert">

      <p class="texte-question">{text}</p>

      <ol id="olLikert">

        <div class="zone-selection">
          <p class="texte-selection">Tout à fait d'accord</p>
          <img class="icones-pouces" src="/img/iconmonstr-thumb-10-48.png"></img>
        </div>

        <div class="choix-niveau">
          <li class="liLikert">
            <label>
              <input class="radio" type="radio" name="likert" value="1" />
            </label>
          </li>
          <li class="liLikert">
            <label>
              <input class="radio" type="radio" name="likert" value="2" />
            </label>
          </li>
          <li class="liLikert">
            <label>
              <input class="radio" type="radio" name="likert" value="3" />
            </label>
          </li>
          <li class="liLikert">
            <label>
              <input class="radio" type="radio" name="likert" value="4" />
            </label>
          </li>
          <li class="liLikert">
            <label>
              <input class="radio" type="radio" name="likert" value="5" />
            </label>
          </li>
          <li class="liLikert">
            <label>
              <input class="radio" type="radio" name="likert" value="6" />
            </label>
          </li>
          <li class="liLikert">
            <label>
              <input class="radio" type="radio" name="likert" value="7" />
            </label>
          </li>
        </div>
        <div class="zone-selection">
          <p class="texte-selection">Pas du tout d'accord</p>
          <img class="icones-pouces" src="/img/iconmonstr-thumb-12-48.png"></img>
        </div>

      </ol>
    </div>

  );
}

export default Likert;
