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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: #3089d7;
  font-size: 5rem;
  margin-bottom: 0.2rem;
  padding: 10px;

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
      gap: 0px;
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
        font-size: 1.2rem;
        padding: 1rem;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .building {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #3089d7;
    padding: 20px;
    gap: 3%;

    @media (max-width: 960px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 0px;
    }

    .buildingInfo {
      display: flex;
      justify-content: center;
      text-align: center;
      background-color: #fff;

      h1 {
        display: flex;
        margin: 0px;
        font-size: 1.6rem;
        color: #3089d7;
        align-items: center;
        padding: 5%;
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
