import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(90deg, blue, darkblue);
  font-family: "PT Sans", sans-serif;
  margin-top: 0px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const NavbarLogo = styled.div`
  height: 100%;
  width: 40vw;
  display: flex;
  padding-right: 10%;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  height: 100%;
  width: 60vw;
  display: flex;
  padding-left: 5%;
  align-items: center;
  justify-content: center;
`;

export const NavMenu = styled.ul`
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 25px;
  list-style: none;
  text-align: end;
  margin-top: 15px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  white-space: nowrap;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    color: black;
  }
`;

export const StyledSpecialLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  white-space: nowrap;
  border: 2px solid #fff;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    color: black;
    background: #fff ;
  }
`;
