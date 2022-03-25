import React from "react";
import { Calendar } from "antd";
import { InfoContainer, Container, Title, Content } from "./styles";
import Footer from "../../components/Footer";

const Information = () => (
  <InfoContainer>
    <Container>
      <Title>Sobre Nós</Title>
      <Content>
        <div className="aboutUs">
          <div className="mainInfo">
            <h1>
              O Educandário Ler e Aprender foi fundado em 1999 por Naedja e
              Miriam Santiago, hoje diretora e vice-diretora da escola.
            </h1>
          </div>
          <div className="shortInfo">
            <div className="info">Ensinamos do maternal ao infantil!</div>
            <div className="info">Ambiente familiar.</div>
            <div className="info">Princípios cristãos.</div>
            <div className="info">
              Profissionais especializados em crianças autistas!
            </div>
          </div>
        </div>
      </Content>
      <Title>Eventos</Title>
      <Content>
        <div className="calendar">
          <span>Calendário de Eventos</span>
          <Calendar fullscreen={false} />
        </div>
      </Content>
    </Container>
    <Footer />
  </InfoContainer>
);

export default Information;
