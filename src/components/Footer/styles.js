import styled from "styled-components";

export const FooterContainer = styled.div`
  background: linear-gradient(90deg, blue, darkblue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  width: 100%;

  .logo {
    display: flex;
    font-family: "Times New Roman";
    font-weight: bold;
    color: #fff;
    font-size: 2rem;
    align-items: center;
    justify-content: center;

    .pet {
      height: 60px;
      width: 60px;
      margin: 0px 7px 10px 0px;
    }
  }

  .contactContainer {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 960px) {
      grid-auto-flow: row;
      grid-template-columns: none;
    }

    .content {
      color: #fff;
      font-size: 30px;

      @media (max-width: 450px) {
        font-size: 20px;
      }

      .headers {
        color: #fff;
        font-size: 40px;
      }

      .contacts {
        font-size: 1.4rem;
      }

      .address {
        font-size: 1.2rem;
      }
    }
  }
`;
