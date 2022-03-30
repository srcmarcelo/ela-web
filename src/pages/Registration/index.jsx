import React from "react";
import { Container, TitleContainer, Title } from "./styles";
import Footer from "../../components/Footer";
import FormRedirect from "../../components/FormRedirect";

const Registration = () => {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  let myWidth = window.innerWidth;

  function displayWindowSize() {
    myWidth = window.innerWidth;
  }

  return (
    <Container>
      <TitleContainer>
        <Title style={{ marginTop: "80px" }}>Matrícula</Title>
      </TitleContainer>
      <FormRedirect
        title="Dê ao(a) seu(ua) filho(a) o ensino de qualidade que ele(a) merece!"
        sub={`Para fazer a pré-matrícula,
          preencha o formulário ${
            myWidth < 960 ? "pressionando o" : "clicando no"
          } botão ${myWidth < 1068 ? "abaixo" : "ao lado"}!`}
        link="https://forms.gle/hvnsHCscuP3snxqH9"
      />
      <Footer />
    </Container>
  );
};

export default Registration;
