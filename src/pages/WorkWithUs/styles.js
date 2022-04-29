import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: "Kids Font";
  color: #3089d7;
  font-size: 80px;
  margin-bottom: 0.2rem;
  padding: 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 50px;
  }
`;
