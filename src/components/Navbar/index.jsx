import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Menu,
  NavLinks,
  StyledLink,
  StyledSpecialLink,
  MenuLinks,
} from "./styles";
import pet from "../../assets/images/pet.ico";

const Navbar = () => {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  let myWidth = window.innerWidth;

  const [mobile, setMobile] = useState(myWidth < 960);
  const [menu, setMenu] = useState(false);

  function displayWindowSize() {
    myWidth = window.innerWidth;
    setMobile(myWidth < 960);
  }

  function setScrollTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (menu) setScrollTop();
  }, [menu]);

  return (
    <>
      {menu && mobile ? (
        <Menu>
          <div className="menuLinksContainer">
            <MenuLinks onClick={() => setMenu(false)} to="/">
              Início
            </MenuLinks>
            <MenuLinks onClick={() => setMenu(false)} to="/registration">
              Matrícula
            </MenuLinks>
            <MenuLinks onClick={() => setMenu(false)} to="/information">
              Informações
            </MenuLinks>
            <MenuLinks onClick={() => setMenu(false)} to="/work_with_us">
              Trabalhe Conosco
            </MenuLinks>
          </div>
          <FontAwesomeIcon
            icon={faX}
            size="2x"
            className="exitIcon"
            onClick={() => setMenu(false)}
          />
        </Menu>
      ) : (
        <Container>
          <Link onClick={() => setScrollTop()} to="/" className="logo">
            <img src={pet} preview={false} className="pet" alt="dove" /> ELA
          </Link>
          {mobile ? (
            <div onClick={() => setMenu(true)} className="bars">
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
              />
            </div>
          ) : (
            <NavLinks>
              <StyledLink onClick={() => setScrollTop()} to="/">
                Início
              </StyledLink>
              <StyledLink onClick={() => setScrollTop()} to="/information">
                Informações
              </StyledLink>
              <StyledLink onClick={() => setScrollTop()} to="/work_with_us">
                Trabalhe Conosco
              </StyledLink>
              <StyledSpecialLink
                onClick={() => setScrollTop()}
                to="/registration"
              >
                Matrícula
              </StyledSpecialLink>
            </NavLinks>
          )}
        </Container>
      )}
    </>
  );
};

export default Navbar;
