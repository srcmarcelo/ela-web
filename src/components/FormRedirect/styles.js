import styled from "styled-components";

export const Container = styled.div`
  padding: 0% 10% 5% 10%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3089d7;
  padding: 20px;

  .text {
    font-size: 30px; 
    color: #fff;
  }

  .sub {
    color: #fff; 
  }
`;

export const Redirect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
