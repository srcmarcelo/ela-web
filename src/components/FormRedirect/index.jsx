import React from "react";
import { Container, Content, Info, Redirect, FormButtom } from "./styles";

const FormRedirect = ({ title, sub, link }) => (
  <Container>
    <Content>
      <Info>
        <h1 className="text">{title}</h1>
        <h2 className="sub">{sub}</h2>
      </Info>
      <Redirect>
        <FormButtom href={link}>
          Preencher Formulário
        </FormButtom>
      </Redirect>
    </Content>
  </Container>
);

export default FormRedirect;
