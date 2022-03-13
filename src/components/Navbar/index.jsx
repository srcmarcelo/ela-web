import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  NavbarContainer,
  NavbarLogo,
  MenuContainer,
  NavMenu,
  StyledLink,
  StyledSpecialLink,
} from "./styles";

const RenderMainLink = () => (
  <Link
    to="/"
    style={{ color: "#fff", fontSize: "2rem", textDecoration: "none" }}
  >
    ELA <FontAwesomeIcon icon={faDove} />
  </Link>
);

const Navbar = () => (
  <Container>
    <NavbarContainer>
      <NavbarLogo>
        <RenderMainLink />
      </NavbarLogo>
      <MenuContainer>
        <NavMenu>
          <li>
            <StyledLink to="/">Início</StyledLink>
          </li>
          <li>
            <StyledLink to="/about_us">Informações</StyledLink>
          </li>
          <li>
            <StyledLink to="/registration">Matrícula</StyledLink>
          </li>
          <li>
            <StyledSpecialLink to="/work_with_us">
              Trabalhe Conosco
            </StyledSpecialLink>
          </li>
        </NavMenu>
      </MenuContainer>
    </NavbarContainer>
  </Container>
);

export default Navbar;
