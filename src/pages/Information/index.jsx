import React from "react";
import { Calendar } from "antd";
import {
  InfoContainer,
  Container,
  TitleContainer,
  Title,
  Content,
} from "./styles";
import Footer from "../../components/Footer";

const Information = () => (
  <InfoContainer>
    <Container>
      <TitleContainer>
        <Title style={{ marginTop: "70px" }}>Sobre Nós</Title>
      </TitleContainer>
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
      <TitleContainer>
        <Title>Infraestrutura</Title>
      </TitleContainer>
      <Content>
        <div className="building">
          <div className="buildingInfo">
            <h1>
              Banda larga de alta velocidade, smart TV's e muitos recursos
              multimídia pra uma melhor qualidade das aulas.
            </h1>
          </div>
          <div className="buildingInfo">
            <h1>Contamos com 8 salas climatizadas e bem organizadas.</h1>
          </div>
          <div className="buildingInfo">
            <h1>
              Estamos com um projeto em mãos para que, em breve, a escola ELA
              será um prédio de primeiro andar!
            </h1>
          </div>
        </div>
      </Content>
      <TitleContainer>
        <Title>Eventos</Title>
      </TitleContainer>
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
