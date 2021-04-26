import React from "react";
import "../styles/Homepage.css";
import { TantegerdaLogo } from "../assets/icons";
import picture_of_me from "../assets/img/Picture-of-me.png";

function HomePage() {
  return (
    <div className="Homepage">
      <div className="Top">
        <h1 className="TopTitle">
          <span>Edvard Høiby</span>
        </h1>

        <button className="TopButton">
          <span>Portfolio</span>
        </button>
        <img className="TopImg" src={picture_of_me} alt="" />

        <h3 className="TopNorwegian">NORWEGIAN</h3>
        <h2 className="TopDev">Developer & Designer</h2>
      </div>

      <div className="specialties">
        <h2>Specialties</h2>

        <div className="specialties-undertitles">
          <h3>React JS</h3>
        </div>
        <div className="specialties-undertitles">
          <h3>Vue JS</h3>
        </div>
        <div className="specialties-undertitles">
          <h3>Strapi CMS</h3>
        </div>
        <div className="specialties-undertitles">
          <h3>Figma</h3>
        </div>
        <div className="specialties-undertitles">
          <h3>Adobe</h3>
        </div>
      </div>

      <div className="Referanser">
        <h2>Referanser</h2>
        <div>
          <div>
            <a href="a-link" target="blank">
              <TantegerdaLogo />
            </a>
          </div>
          <div>
            <a href="a-link" target="blank">
              <TantegerdaLogo />
            </a>
          </div>
          <div>
            <a href="a-link" target="blank">
              <TantegerdaLogo />
            </a>
          </div>
          <div>
            <a href="a-link" target="blank">
              <TantegerdaLogo />
            </a>
          </div>
        </div>
      </div>
      <div className="Contact">
        <h2>Kontakt</h2>
        <h3>Mail: edvardhoiby@outlook.com</h3>
        <h3>Telefon: 94799702</h3>
        <h3>GitHub: 3ddyBoi</h3>
      </div>
    </div>
  );
}

export default HomePage;
