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
  font-family: "Kids Font";
  color: #3089d7;
  font-size: 5rem;
  margin-bottom: 0.2rem;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
  @media (max-width: 380px) {
    font-size: 2rem;
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
        font-family: "Content Font";
        margin: 0px;
        font-size: 2rem;
        color: #fff;
        align-self: center;
      }
    }

    .shortInfo {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .info {
        font-family: "Times New Roman";
        font-weight: bold;
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
        font-family: "Times New Roman";
        font-weight: bold;
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
    display: flex;
    flex-direction: column;
    background-color: #3089d7;
    color: #fff;
    font-size: 2.5rem;
    padding: 20px 20px 30px 20px;
    width: 100%;

    span {
      font-family: "Kids Font";
    }

    .eventsContainer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-top: 10px;

      @media (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
