import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  padding: 0% 10% 4% 10%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 1068px) {
    grid-auto-flow: row;
    grid-template-columns: none;
    gap: 20px;
  }
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

export const FormButtom = styled(Button)`
  display: flex;
  border-radius: 20px;
  background-image: linear-gradient(blue, darkblue);
  color: #fff;
  width: 200px;
  height: 100px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;
