import React from "react";
import "../styles/Footer.css";

import "../assets/icons/index.js";
import {
  GithubLogo,
  InstagramLogo,
  MailIkon,
  SnapchatLogo,
} from "../assets/icons/index.js";

function Footer() {
  return (
    <div className="Footer">
      <div className="sosiale-medier">
        <a href="https://www.snapchat.com/add/edvardhoiby" target="blank">
          <SnapchatLogo className="Snapchat-icon icon" />
        </a>
        <a href="https://github.com/3ddyBoi" target="blank">
          <GithubLogo className="Github-icon icon" />
        </a>
        <a href="https://www.instagram.com/3ddyboii/" target="blank">
          <InstagramLogo className="Instagram-icon icon" />
        </a>
        <a href="mailto:edvardhoiby@outlook.com">
          <MailIkon className="Mail-icon icon" />
        </a>
      </div>
      <div className="contact">
        <p className="phone">
          <a href="tel:+4794799702">Telefon: 947 99 702</a>
        </p>
        <p className="mail">
          <a href="mailto:edvardhoiby@outlook.com">
            Epost: edvardhoiby@outlook.com
          </a>
        </p>
        <p className="location">2380 Brumunddal</p>
        <p className="copyright_tekst">© Edvard Høiby</p>
      </div>
    </div>
  );
}

export default Footer;
