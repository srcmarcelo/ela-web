import React from 'react';
import {
  Container,
  Content,
  Info,
  Redirect,
  FormButtom,
  WhatsAppFormButtom,
} from './styles';

const FormRedirect = ({ title, sub, link, work }) => (
  <Container>
    <Content>
      <Info>
        <h1 className='text'>{title}</h1>
        <h2 className='sub'>{sub}</h2>
      </Info>
      <Redirect>
        {work ? (
          <WhatsAppFormButtom href={link} target='_blank' rel='noopener noreferrer'>
            Ir para WhatsApp
          </WhatsAppFormButtom>
        ) : (
          <FormButtom
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            Preencher Formulário
          </FormButtom>
        )}
      </Redirect>
    </Content>
  </Container>
);

export default FormRedirect;
