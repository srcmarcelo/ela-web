import styled from "styled-components";
import { Carousel } from "antd";

export const CarouselContainer = styled(Carousel)`
  background: red;
  width: 550px;
  justify-content: center;
  align-items: center;
  background: #3089d7;

  @media (max-width: 1206px) {
    width: 460px;
  }

  @media (max-width: 550px) {
    width: 320px;
  }
  @media (max-width: 480px) {
    width: 280px;
  }
  @media (max-width: 300px) {
    width: 230px;
  }
`;

export const Item = styled.div`
  display: flex;
  height: 380px;
  margin-top: 60px;

  .image {
    height: 320px;

    @media (max-width: 1206px) {
      height: 280px;
      margin-top: 20px;
    }

    @media (max-width: 480px) {
      height: 260px;
    }

  @media (max-width: 300px) {
    height: 230px;
  }
`;
