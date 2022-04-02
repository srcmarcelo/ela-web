import React from "react";
import {
  InfoContainer,
  Container,
  TitleContainer,
  Title,
  Content,
} from "./styles";
import InfoEvent from "./components/InfoEvent";
import Footer from "../../components/Footer";

const Information = () => (
  <InfoContainer>
    <Container>
      <TitleContainer>
        <Title style={{ marginTop: "80px" }}>Sobre Nós</Title>
      </TitleContainer>
      <Content>
        <div className="aboutUs">
          <div className="mainInfo">
            <h1>
              O Educandário Ler e Aprender foi fundado em 1994 por Naedja e
              Miriam Santiago, hoje diretora e vice-diretora da escola.
            </h1>
          </div>
          <div className="shortInfo">
            <div className="info">Ensinamos do maternal ao infantil</div>
            <div className="info">Aulas de inglês e libras</div>
            <div className="info">Princípios cristãos</div>
            <div className="info">
              Profissionais especializadas em educação especial
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
            <h1>Contamos com 7 salas climatizadas e bem organizadas.</h1>
          </div>
          <div className="buildingInfo">
            <h1>
              Estamos com um projeto em mãos para que, em breve, a escola ELA
              seja um prédio de primeiro andar!
            </h1>
          </div>
        </div>
      </Content>
      <TitleContainer>
        <Title>Eventos</Title>
      </TitleContainer>
      <Content>
        <div className="calendar">
          <span>Próximos Eventos:</span>
          <div className="eventsContainer">
            <InfoEvent title="Páscoa" date="14/04/2022" />
            <InfoEvent title="Dia do livro" date="18/04/2022" />
            <InfoEvent title="Dia das mães" date="06/05/2022" />
            <InfoEvent title="Festa Junina" date="A confirmar" />
            <InfoEvent title="Férias" date="A confirmar" />
            <InfoEvent title="Dia do estudante" date="11/08/2022" />
            <InfoEvent title="Dia das crianças" date="12/10/2022" />
            <InfoEvent title="Dia do professor" date="15/10/2022" />
            <InfoEvent title="Formatura" date="A confirmar" />
          </div>
        </div>
      </Content>
    </Container>
    <Footer />
  </InfoContainer>
);

export default Information;
