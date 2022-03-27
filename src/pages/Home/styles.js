import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  justify-content: center;
`;

export const PicturesComponent = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  grid-auto-flow: column;
  background: #3089d7;

  @media (max-width: 1070px) {
    grid-auto-flow: row;
    padding: 30px 0px 30px 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  .image {
    // height: 20rem;
    height: 8rem;

    @media (max-width: 1206px) {
      // height: 17.5rem;
      height: 12.5rem;
    }
    @media (max-width: 480px) {
      // height: 16.25rem;
      height: 12.25rem;
    }
    @media (max-width: 300px) {
      // height: 14.375rem;
      height: 12.375rem;
    }
  }
`;

export const Title = styled.h1`
  color: #3089d7;
  font-size: 5rem;
  margin-bottom: 0.2rem;
  padding: 10px;

  @media (max-width: 480px) {
    font-size: 50px;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #3089d7;
  padding: 30px 10px 50px 10px;

  .title {
    font-size: 40px;
    color: #fff;
    margin-bottom: 40px;
  }

  .iconsContainer {
    padding-bottom: 10px;
    display: grid;
    grid-auto-flow: column;
    background: #fff;

    @media (max-width: 1006px) {
      grid-auto-flow: row;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 230px;
  text-align: center;
  border: solid 4px #fff;
  padding: 20px;
  background: #fff;
  margin: 0px 50px 0px 50px;

  @media (max-width: 330px) {
    width: 100px;
  }
`;
