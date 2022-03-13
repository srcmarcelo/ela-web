import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faBars } from "@fortawesome/free-solid-svg-icons";
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

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [bars, setBars] = useState(true);

  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    const myWidth = window.innerWidth;
    if (myWidth < 1206) setMobile(true);
    else setMobile(false);
  }

  return (
    <Container>
      <NavbarContainer>
        <NavbarLogo>
          <RenderMainLink />
        </NavbarLogo>
        <MenuContainer>
          {(mobile && bars) ? (
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              onClick={() => setBars(false)}
            />
          ) : (
            <NavMenu>
              <li>
                <StyledLink to="/">Início</StyledLink>
              </li>
              <li>
                <StyledLink to="/about_us">Informações</StyledLink>
              </li>
              <li>
                <StyledLink to="/work_with_us">Trabalhe Conosco</StyledLink>
              </li>
              <li>
                <StyledSpecialLink to="/registration">
                  Matrícula
                </StyledSpecialLink>
              </li>
            </NavMenu>
          )}
        </MenuContainer>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
