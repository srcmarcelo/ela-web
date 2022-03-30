import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FooterContainer } from "./styles";
import pet from "../../assets/images/pet.ico";

const Footer = () => (
  <FooterContainer>
    <div className="logo">
      <img src={pet} preview={false} className="pet" alt="dove" /> ELA
    </div>
    <div className="contactContainer">
      <div className="content">
        <div className="headers">Nos siga no Instagram!</div>
        <a
          style={{ color: "#fff", textDecoration: "underline" }}
          target="_blank"
          href="https://www.instagram.com/educandariolereaprender/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} /> @educandariolereaprender{" "}
        </a>
      </div>
      <div className="content">
        <div className="headers">Endereço</div>
        <div className="address">
          Segunda Travessa Pio XII, 205D
        </div>
        <div className="address">Cajueiro Seco</div>
        <div className="address">Jaboatão dos Guararapes - PE</div>
        <div className="address">
          CEP: 54.330-321
        </div>
      </div>
      <div className="content">
        <div className="headers">Contatos</div>
        <div className="contacts">
          <FontAwesomeIcon icon={faPhone} /> (81) 99317-1853
        </div>
        <div className="contacts">
          <FontAwesomeIcon icon={faWhatsapp} /> (81) 99317-1853
        </div>
        <div className="contacts">
          <FontAwesomeIcon icon={faEnvelope} /> equipe.escolaela@gmail.com
        </div>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
