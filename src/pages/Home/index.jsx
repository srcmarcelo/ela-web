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
import side1 from "../../assets/images/side1.jpg";
import side2 from "../../assets/images/side2.jpg";

const RenderIcon = ({ icon, label, path }) => {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  let myWidth = window.innerWidth;

  function displayWindowSize() {
    myWidth = window.innerWidth;
  }

  function setScrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <IconContainer>
        <Link to={path} onClick={() => setScrollTop()}>
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
      <Title style={{ marginTop: "70px" }}>Educandário Ler e Aprender</Title>
    </Container>
    <PicturesComponent>
      <Container style={{ alignItems: "center" }}>
        <img
          src={side1}
          preview={false}
          alt="Estamos prontos para construir um futuro melhor!"
          className="image"
        />
      </Container>
      <HomeCarousel />
      <Container style={{ alignItems: "center" }}>
        <img
          src={side2}
          preview={false}
          alt="Um novo jeito de unir dons e talentos!"
          className="image"
        />
      </Container>
    </PicturesComponent>
    <Container>
      <Title>Uma escola para todos(as)!</Title>
    </Container>
    <NewsContainer>
      <h2 className="title">
        CONHEÇA, COLABORE E MATRICULE SEU(UA) FILHO(A) AGORA MESMO!
      </h2>
      <div className="iconsContainer">
        <RenderIcon
          icon={faCircleInfo}
          label="Infomações"
          path="/informacoes"
        />
        <RenderIcon
          icon={faChalkboardUser}
          label="Trabalhe Conosco"
          path="/trabalhe_conosco"
        />
        <RenderIcon icon={faBook} label="Matrícula" path="/matricula" />
      </div>
    </NewsContainer>
    <Container>
      <Title>Venha nos conhecer!</Title>
    </Container>
    <Footer />
  </HomeContainer>
);

export default Home;
