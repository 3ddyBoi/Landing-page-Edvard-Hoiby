import React from "react";
import { useHistory } from "react-router-dom";

import { Backarrow } from "../assets/icons";
import "../App.css";
import "../styles/Portfolio.css";
import Footer from "../Components/Footer";

import TanteGerdaFremside from "../assets/img/websites-screenshots/tantegerda/Tante-gerda-fremside.png";
// import TanteGerdaFremsideKontakt from "../assets/img/websites-screenshots/tantegerda/Tante-gerda-fremside-kontakt.png";
// import TanteGerdaFremsideProduktTeaser from "../assets/img/websites-screenshots/tantegerda/Tante-gerda-fremside-produkt-teaser.png";
// import TanteGerdaNav from "../assets/img/websites-screenshots/tantegerda/Tante-gerda-nav.png";
// import TanteGerdaFooter from "../assets/img/websites-screenshots/tantegerda/Tante-gerda-footer.png";

function Portfolio() {
  const history = useHistory();
  const handleBackclick = () => history.push("/");

  return (
    <div>
      <div className="Portfolio">
        <button className="Button-backarrow" onClick={handleBackclick}>
          <Backarrow className="test" />
        </button>
        <div className="Prosjekter">
          <img src={TanteGerdaFremside} alt="" />
          <img src={TanteGerdaFremside} alt="" />
          <img src={TanteGerdaFremside} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
