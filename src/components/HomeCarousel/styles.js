import styled from "styled-components";
import { Carousel } from "antd";

export const CarouselContainer = styled(Carousel)`
  background: red;
  width: 34.375rem;
  justify-content: center;
  align-items: center;
  background: #3089d7;

  @media (max-width: 1206px) {
    width: 28.75;
  }

  @media (max-width: 550px) {
    width: 26.25rem;
  }
  @media (max-width: 480px) {
    width: 17.5rem;
  }
  @media (max-width: 300px) {
    width: 14.375rem;
  }
`;

export const Item = styled.div`
  display: flex;
  height: 23.75rem;
  margin-top: 3.75rem;

  .image {
    height: 20rem;

    @media (max-width: 1206px) {
      height: 17.5rem;
      margin-top: 1.25rem;
    }

    @media (max-width: 480px) {
      height: 16.25rem;
    }

    @media (max-width: 300px) {
      height: 14.375rem;
    }
  }
`;
