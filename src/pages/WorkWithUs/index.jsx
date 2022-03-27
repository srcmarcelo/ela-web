import React from "react";
import { Container, TitleContainer, Title } from "./styles";
import Footer from "../../components/Footer";
import FormRedirect from "../../components/FormRedirect";

const WorkWithUs = () => {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  let myWidth = window.innerWidth;

  function displayWindowSize() {
    myWidth = window.innerWidth;
  }

  return (
    <Container>
      <TitleContainer>
        <Title style={{ marginTop: "70px" }}>Trabalhe Conosco!</Title>
      </TitleContainer>
      <FormRedirect
        title="Sempre estamos precisando de mais gente compromissada e disposta a
          crescer junto com a gente!"
        sub={`Para se candidatar a uma vaga como professora ou em outras áreas,
          preencha o formulário ${
            myWidth < 960 ? "pressionando o" : "clicando no"
          } botão ${myWidth < 1068 ? "abaixo" : "ao lado"}!`}
        link="https://forms.gle/oB2aFUup4CTWzyFh7"
      />
      <Footer />
    </Container>
  );
};

export default WorkWithUs;
