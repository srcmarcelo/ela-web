import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(90deg, blue, darkblue);
  font-family: "PT Sans", sans-serif;
  height: 80px;
  display: grid;
  grid-auto-flow: column;
  position: sticky;

  .logo {
    align-self: center;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    margin-left: 20%;
  }

  .bars {
    align-self: center;
    justify-self: end;
    margin-right: 20%;

    &:hover {
      color: #fff;
    }
  }
`;

export const Menu = styled.div`
  display: grid;
  background: #3089d7;
  width: 100vw;
  height: 100vh;
  transition: 1s;

  .menuLinksContainer {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-self: center;
    align-self: center;
  }

  .exitIcon {
    justify-self: end;
    margin: 5% 7% 0px 0px;

    &:hover {
      color: #fff;
    }
  }
`;

export const MenuLinks = styled(Link)`
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  white-space: nowrap;
  padding: 10px;
  transition: 0.3s;
  text-align: center;

  &:hover {
    color: black;
  }
`;

export const NavLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 0fr);
  gap: 5%;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  white-space: nowrap;
  padding: 10px;
  transition: 0.3s;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    padding: 5px;
  }

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

  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    padding: 5px;
  }

  &:hover {
    color: black;
    background: #fff;
  }
`;
