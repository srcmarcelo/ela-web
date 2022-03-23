import styled from "styled-components";

export const FooterContainer = styled.div`
  background: linear-gradient(90deg, blue, darkblue);
  text-align: center;
  padding: 20px;

  .iconContainer {
    color: #fff;
    font-size: 40px;
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
        font-size: 24px;
      }

      .address {
        font-size: 18px;
      }
    }
  }
`;
