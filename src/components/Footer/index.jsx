import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FooterContainer } from "./styles";

const Footer = () => (
  <FooterContainer>
    <div className="iconContainer">
      ELA <FontAwesomeIcon icon={faDove} />
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
          Segunda Travessa Pio XII, 205, Cajueiro Seco
        </div>
        <div className="address">
          CEP: 54.330-320 | Jaboatão dos Guararapes - PE
        </div>
      </div>
      <div className="content">
        <div className="headers">Contatos</div>
        <div className="contacts">
          <FontAwesomeIcon icon={faPhone} /> (81) 99538-6426
        </div>
        <div className="contacts">
          <FontAwesomeIcon icon={faWhatsapp} /> (81) 99317-1853
        </div>
        <div className="contacts">
          <FontAwesomeIcon icon={faEnvelope} /> naedja_14@hotmail.com
        </div>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
