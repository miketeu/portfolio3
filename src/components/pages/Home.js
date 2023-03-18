import React from "react";
import "../../css/home.module.css";
import BG from "../images/bgHome.jpg";
import MugShot from "../images/MugShot.png";

<>
  <img className="background" BG={BG} alt="" />
  <img className="logo" MugShot={MugShot} alt="Mug Shot" />
</>;

function Home() {
  return (

    


    <>
      <div className="section">

    <div style={{ backgroundImage:`url(${BG})` }}>
  
    


     
        <div>
          <img src={MugShot} alt=""></img>
        </div>

        <h1 className="light">My Portfolio</h1>
        <p >
          lNunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mlis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at. lNunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </p>
        </div>
      </div>
    </>
  );
}

export default Home;
