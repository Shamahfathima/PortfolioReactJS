import React from "react";
import "./index.css";

import Gamedev from "../assets/img/gamedev.jpg";
import Results from "../assets/img/SRMS.png";

function Work(){
    return(
        <section className="section has-background-light" id="work">
        <div className="container is-vcentered">
          {/*Project-1*/}
          <div className="columns is-multiline-is-vcentered">
            <div className="class p-widescreen-4 is-half">
              <article> 
                <figure className="image is-2by2">
                  <img src={Gamedev} alt="Project-1" />
                </figure>
              </article>
            </div>
            <div className="column p-widescreen-4 is-half">
              <article className="has-text-centered">
                <h1 className="title is-2">
                  BugsForBees
                </h1>
                <h2 className="subtitle is-4">
                  Game development | Client : Gameloft
                </h2>
                <p className="has-text-left" is-color-red>
                  I did my final year project which was really intersesting. It was about game development and was given as induvidual project. 
                  Game making is considered both art and science.<br />
                  Used Languages :
                </p><ul type="round">
                  <li> JavaScript </li>
                  <li> Php </li>
                  <li> MYSQL</li>
                </ul>
                <p />
                <br />
                <a href="#" className="porfolioBtn" target="_blank">
                  Learn More..
                </a>
              </article>
            </div>
          </div>
          <hr />
          {/*Project-2*/}
          <div className="columns reverse">
            <div className="column is-half reverseTxt">
              <article className="has-text-centered">
                <h1 className="title is-2">
                  SRBM Project 
                </h1>
                <h2 className="subtitle is-4">
                  Student Result Management System | Client : Department of Examinations
                </h2>
                <p className="has-text-centered">
                  The main objective of the project is to provide the examination result to the student in a simple way.
                  This project is useful for students and institutions for getting the results in simple manner.
                  By a result analyzer with subject status and marks is an application tool for displaying the results in secure way.
                </p>
                <br />
                <a href="#" className="porfolioBtn" target="_blank">
                  SEE MORE..
                </a>
              </article>
            </div>
            <div className="column is-half">
              <article>
                <figure className="image is-2by2">
                  <img src={Results} alt="Project-2" />
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Work;