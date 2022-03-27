import React from "react";
import Footer from "../../components/Footer";
import HomeCarousel from "../../components/HomeCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faBook,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  HomeContainer,
  Container,
  Title,
  NewsContainer,
  IconContainer,
  PicturesComponent,
} from "./styles";
import { Link } from "react-router-dom";

const RenderIcon = ({ icon, label, path }) => {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  let myWidth = window.innerWidth;

  function displayWindowSize() {
    myWidth = window.innerWidth;
  }

  return (
    <div>
      <IconContainer>
        <Link
          to={path}
          onClick={() => (document.getElementById("root").scrollHeight = 0)}
        >
          <FontAwesomeIcon icon={icon} size={myWidth < 330 ? "5x" : "10x"} />
        </Link>
      </IconContainer>
      <span style={{ fontSize: "20px" }}>{label}</span>
    </div>
  );
};

const Home = () => (
  <HomeContainer>
    <Container>
      <Title>Educandário Ler e Aprender</Title>
    </Container>
    <PicturesComponent>
      <Container style={{ alignItems: "center" }}>
        <img src="/images/side1.jpg" preview={false} alt="" className="image" />
      </Container>
      <HomeCarousel />
      <Container style={{ alignItems: "center" }}>
        <img src="/images/side2.jpg" preview={false} alt="" className="image" />
      </Container>
    </PicturesComponent>
    <Container>
      <Title>Uma escola para todos(as)!</Title>
    </Container>
    <NewsContainer>
      <h2 className="title">
        CONHEÇA, COLABORE E MATRICULE SEU FILHO AGORA MESMO!
      </h2>
      <div className="iconsContainer">
        <RenderIcon
          icon={faCircleInfo}
          label="Infomações"
          path="/information"
        />
        <RenderIcon
          icon={faChalkboardUser}
          label="Trabalhe Conosco"
          path="/work_with_us"
        />
        <RenderIcon icon={faBook} label="Matrícula" path="/registration" />
      </div>
    </NewsContainer>
    <Container>
      <Title>Venha nos conhecer!</Title>
    </Container>
    <Footer />
  </HomeContainer>
);

export default Home;
