import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../images/bgHome.jpg";
import "../../css/home.css";

function Home() {
  return (
    <>
      <section className="background">
        <div className="background-image">
          <img src="../../images/bgHome.jpg" alt="" />

          <div className="logo">
            <img src="../../images/MugShot.png" alt="Mug Shot" />
          </div>

          <h1 className="light">Hello!</h1>
          <h3 className="light">Welcome to my Portfolio.</h3>
          <p className="light">
            {" "}
            lNunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
            semper imperdiet. Praesent euismod mi justo, faucibus scelerisque
            risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus
            blandit at. lNunc pharetra finibus est at efficitur. Praesent sed
            congue diam. Integer gravida dui mauris, ut interdum nunc egestas
            sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta.
            Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet
            orci porta quam semper imperdiet. Praesent euismod mi justo,
            faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit
            amet facilisis lectus blandit at.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
