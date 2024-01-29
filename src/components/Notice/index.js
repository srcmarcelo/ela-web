import React from 'react';
import { Container } from './styles';

const Notice = ({ content, list }) => (
  <Container>
    <h1>Aviso!</h1>
    <h2>{content}</h2>
    {list && (
      <div style={{paddingLeft: '20px'}}>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </Container>
);

export default Notice;
