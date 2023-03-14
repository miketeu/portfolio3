import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../images/building.jpg";
import "../pages/ProjectGallery.css"


function ProjectGallery() {
  return (
 
    <div className="wrapper">
   
      <Card
       img="https://images.unsplash.com/photo-1678664755731-5c893669ea3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="building" 
          title="Project 1"
          description="My first project Bleh blah! blah blah Bleh blah! blah blah"
        />
        
        <Card
        
          title="Project 2"
          description="My first project Bleh blah! blah blah Bleh blah! blah blah"
        />
            
      <Card
        
          title="Project 3"
          description="My first project Bleh blah! blah blah Bleh blah! blah blah"
        />
      </div>
    )
    }

    function Card(props){
      return(
      <div className="card">
        <div className="card_body"></div>
        <img src={props.img} alt="" className="card__image" />
        <h2 className= "card__title"> {props.title}</h2>
        <p className="card__description"> {props.description} </p>
        <button className="card_button">View Project</button>
      </div>
  )
}

export default ProjectGallery;
