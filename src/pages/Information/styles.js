import styled from "styled-components";

export const InfoContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding-bottom: 2rem;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #3089d7;
  font-size: 5rem;
  margin-bottom: 0.2rem;
  padding: 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0% 10%;
  width: 100%;
  height: 100%;

  .aboutUs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #3089d7;
    padding: 20px;
    gap: 5%;

    @media (max-width: 960px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .mainInfo {
      display: flex;
      justify-content: center;
      text-align: center;

      h1 {
        margin: 0px;
        font-size: 2rem;
        color: #fff;
      }
    }

    .shortInfo {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .info {
        display: flex;
        background-color: #fff;
        color: #3089d7;
        font-size: 1rem;
        padding: 1rem;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .calendar {
    background-color: #3089d7;
    color: #fff;
    font-size: 2.5rem;
    padding: 20px;
  }
`;
