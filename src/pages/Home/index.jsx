import React from "react";
import { Image } from "antd";
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
  return (
    <div>
      <IconContainer>
        <Link to={path}>
          <FontAwesomeIcon icon={icon} size="10x" />
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
        <Image src="/images/side1.jpg" preview={false} height={320} />
      </Container>
      <HomeCarousel />
      <Container style={{ alignItems: "center" }}>
        <Image src="/images/side2.jpg" preview={false} height={320} />
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
        <RenderIcon icon={faCircleInfo} label="Infomações" path="/about_us" />
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
