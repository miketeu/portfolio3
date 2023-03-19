import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/ProjectGallery.css";
import "../../css/home.module.css";
import BG from "../images/bgHome.jpg";
import MugShot from "../images/MugShot.png";
import Building from "../images/building.jpg";

<>
  <img className="background" BG={BG} alt="" />
  <img className="logo" MugShot={MugShot} alt="Mug Shot" />
</>;

function Home() {
  return (
    <>
      <div className="section">
        <div style={{ backgroundImage: `url(${BG})` }}>
          <div>
            <img src={MugShot} alt=""></img>
          </div>

          <h1 className="fph1">My Portfolio</h1>

          <div className="wrapper">
            <Card
              img={Building}
              alt="Glass building facade"
              className=""
              title="Project Details"
              description="Hello and welcome to My Portfolio. Take a moment to view the video and see where we are with this portfolio."
            />
          </div>
        </div>
      </div>
    </>
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


export default Home;
