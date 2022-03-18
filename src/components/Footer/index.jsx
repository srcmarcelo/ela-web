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
        <FontAwesomeIcon icon={faInstagram} /> @educandariolereaprender
      </div>
      <div className="content">
        <div className="headers">Contatos</div>
        <div className="contacts">
          <FontAwesomeIcon icon={faPhone} />  (87) 988175129
        </div>
        <div className="contacts">
          <FontAwesomeIcon icon={faWhatsapp} />  (81) 988378335
        </div>
        <div className="contacts">
          <FontAwesomeIcon icon={faEnvelope} />  ela@gmail.com
        </div>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
