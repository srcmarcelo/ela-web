import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(90deg, blue, darkblue);
  font-family: "PT Sans", sans-serif;
  height: 80px;
  width: 100vw;
  z-index: 1000;
  display: grid;
  grid-auto-flow: column;
  position: fixed;

  .logo {
    display: flex;
    font-family: "Times New Roman";
    font-weight: bold;
    align-self: center;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    margin-left: 20%;
    align-items: center;

    .pet {
      height: 60px;
      width: 60px;
      margin: 0px 7px 10px 0px;
    }
  }

  .bars {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20%;
  }
`;

export const Menu = styled.div`
  display: flex;
  background: linear-gradient(90deg, blue, darkblue);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: 1s;

  .menuLinksContainer {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
  }

  .exitIcon {
    position: absolute;
    padding: 30px;
    top: 0px;
    right: 30px;
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
