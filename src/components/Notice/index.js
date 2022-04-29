import React from "react";
import { Container } from "./styles";

const Notice = ({ content }) => (
  <Container>
    <h1>Aviso!</h1>
    <h2>{content}</h2>
  </Container>
);

export default Notice;
