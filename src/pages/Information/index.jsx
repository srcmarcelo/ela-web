import React from 'react';
import {
  InfoContainer,
  Container,
  TitleContainer,
  Title,
  Content,
} from './styles';
import InfoEvent from './components/InfoEvent';
import Footer from '../../components/Footer';

const Information = () => (
  <InfoContainer>
    <Container>
      <TitleContainer>
        <Title style={{ marginTop: '80px' }}>Sobre Nós</Title>
      </TitleContainer>
      <Content>
        <div className='aboutUs'>
          <div className='mainInfo'>
            <h1>
              O Educandário Ler e Aprender foi fundado em 1994 por Naedja e
              Miriam Santiago, hoje diretora e vice-diretora da escola.
            </h1>
          </div>
          <div className='shortInfo'>
            <div className='info'>Ensinamos do maternal ao 5⁰ ano</div>
            <div className='info'>Aulas de inglês, libras, judô e ballet</div>
            <div className='info'>Princípios cristãos</div>
            <div className='info'>
              Profissionais especializadas em educação especial
            </div>
          </div>
        </div>
      </Content>
      <TitleContainer>
        <Title>Infraestrutura</Title>
      </TitleContainer>
      <Content>
        <div className='building'>
          <div className='buildingInfo'>
            <h1>
              Banda larga de alta velocidade, smart TV's e muitos recursos
              multimídia pra uma melhor qualidade das aulas.
            </h1>
          </div>
          <div className='buildingInfo'>
            <h1>NOVO PRÉDIO, NOVA ESTRUTURA</h1>
          </div>
          <div className='buildingInfo'>
            <h1>Aulas de ballet, judô, educação física e muito mais!</h1>
          </div>
        </div>
      </Content>
      <TitleContainer>
        <Title>Eventos</Title>
      </TitleContainer>
      <Content>
        <div className='calendar'>
          <span style={{ fontSize: '1.5rem', textAlign: 'center' }}>
            Algumas das nossas Comemorações
          </span>
          <div className='eventsContainer'>
            <InfoEvent title='Páscoa' />
            <InfoEvent title='Dia do livro' />
            <InfoEvent title='Dia das mães' />
            <InfoEvent title='Festa Junina' />
            <InfoEvent title='Dia dos pais' />
            <InfoEvent title='Dia do estudante' />
            <InfoEvent title='Dia das crianças' />
            <InfoEvent title='Dia do professor' />
            <InfoEvent title='Formatura' />
          </div>
        </div>
      </Content>
    </Container>
    <Footer />
  </InfoContainer>
);

export default Information;
