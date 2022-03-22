import React from "react";
import { Button } from "antd";
import { Container, Content, Info, Redirect } from "./styles";

const FormRedirect = () => (
  <Container>
    <Content>
      <Info>
        <h1 className="text">
          Sempre estamos precisando de mais gente compromissada e disposta a
          crescer junto com a gente!
        </h1>
        <h2 className="sub">
          Para se candidatar a uma vaga como professora ou em outras áreas,
          preencha o formulário clicando no botão ao lado!
        </h2>
      </Info>
      <Redirect>
        <Button
          style={{
            display: "flex",
            borderRadius: "20px",
            backgroundColor: "#3089d7",
            color: "#fff",
            width: "200px",
            height: "100px",
            alignItems: "center",
            justifyContent: "center",
          }}
          href="https://forms.gle/oB2aFUup4CTWzyFh7"
        >
          Preencher Formulário
        </Button>
      </Redirect>
    </Content>
  </Container>
);

export default FormRedirect;
