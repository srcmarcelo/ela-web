import React from 'react';
import { Container, TitleContainer, Title, NoticesContainer } from './styles';
import Footer from '../../components/Footer';
import FormRedirect from '../../components/FormRedirect';
import Notice from '../../components/Notice';

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
        <Title style={{ marginTop: '100px' }}>Matrícula</Title>
      </TitleContainer>
      <FormRedirect
        title='Dê ao(à) seu(ua) filho(a) o ensino de qualidade que ele(a) merece!'
        sub={`Para fazer a pré-matrícula,
          preencha o formulário ${
            myWidth < 960 ? 'pressionando o' : 'clicando no'
          } botão ${myWidth < 1068 ? 'abaixo' : 'ao lado'}!`}
        link='https://forms.gle/hvnsHCscuP3snxqH9'
      />
      <NoticesContainer>
        <Notice content='O Educandário Ler e Aprender só trabalha com crianças a partir dos 2 anos de idade!' />
        <Notice
          content='Turmas com vagas encerradas no momento (atualizado diariamente):'
          list={[
            '3⁰ ano manhã',
            'Todas da tarde, exceto maternal e 5⁰ ano',
          ]}
        />
        {/* <Notice content="No momento, estamos com vagas apenas para o turno da manhã!" /> */}
      </NoticesContainer>
      <Footer />
    </Container>
  );
};

export default Registration;
