import React from "react";
import { Image } from "antd";
import HomeCarousel from "../../components/HomeCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faBook, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { HomeContainer, Container, Title } from "./styles";

const Home = () => (
  <HomeContainer>
    <Container>
      <Title>Educandário Ler e Aprender</Title>
    </Container>
    <Container style={{ justifyContent: "center", background: "#3089d7" }}>
      <Container style={{ alignItems: "center", marginRight: "50px" }}>
        <Image src="/images/side1.jpg" preview={false} height={320} />
      </Container>
      <HomeCarousel />
      <Container style={{ alignItems: "center", marginLeft: "50px" }}>
        <Image src="/images/side2.jpg" preview={false} height={320} />
      </Container>
    </Container>
    <Container>
      <Title>Uma escola para todos(as)!</Title>
    </Container>
    <Container style={{ justifyContent: "center", background: "#3089d7", padding: "50px" }}>
      <Container style={{ border: "solid 4px #fff", padding: "20px", background: "#fff" }}>
        <FontAwesomeIcon icon={faCircleInfo} size="10x" />
      </Container>
      <Container style={{ border: "solid 4px #fff", padding: "20px", background: "#fff" }}>
        <FontAwesomeIcon icon={faBook} size="10x" />
      </Container>
      <Container style={{ border: "solid 4px #fff", padding: "20px", background: "#fff" }}>
        <FontAwesomeIcon icon={faChalkboardUser} size="10x" />
      </Container>
    </Container>
  </HomeContainer>
);

export default Home;
