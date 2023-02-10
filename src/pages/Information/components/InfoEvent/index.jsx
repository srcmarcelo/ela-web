import React from "react";
import { EventContainer } from "./styles";

const InfoEvent = ({title, date}) => (
  <EventContainer>
    <h1>{title}</h1>
  </EventContainer>
);

export default InfoEvent;
