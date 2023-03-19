import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/ProjectGallery.css";
import MugShot from "../images/MugShot.png";
import BigSky from "../images/BigSky.jpg";
import Foonder from "../images/foonder.png";

function ProjectGallery() {
  return (

    
    <div className="wrapper">
      <Card
        img={MugShot}
        alt=""
        className=""
        title="Project Details"
        description="Hello and welcome to My Portfolio gallery. Take a moment to view the video and see where we are with this portfolio."
      />

      <Card
        img={Foonder}
        alt="Screenshot of foonder app"
        title="Project Foonder"
        description="This project, developed in concert with Reza and Mel Akas, is designed to allow a user to either, enter a list of ingredients and have a selection of receips delivered that include those ingredients or, the alternative button when pressed, will deliver a random receipe "


      />

      <Card
        img={BigSky}
        alt="Picture of sunset"
        title="Project Weather "
        description="This space will be accomodating a Weather app that is being constructed in concert with Maciej Magic Skwierawski and Pawel Bzinkowski when this project is complete it will be shown here."
        />
         
    </div>
  );
}

function Card(props) {
  return (
    

    <div className="card">
      <div className="card_body"></div>
      <img src={props.img} alt="" className="card__image" />
      <h2 className="card__title"> {props.title}</h2>
      <p className="card__description"> {props.description} </p>
      <button className="card_button">View Project</button>
    </div>
  
  );
}

export default ProjectGallery;
