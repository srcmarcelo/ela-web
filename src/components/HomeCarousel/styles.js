import styled from "styled-components";
import { Carousel } from "antd";

export const CarouselContainer = styled(Carousel)`
  background: red;
  width: 550px;
  justify-content: center;
  align-items: center;
  background: #3089d7;
`;

export const Item = styled.div`
  display: flex;
  height: 380px;
  margin-top: 60px;
`;
