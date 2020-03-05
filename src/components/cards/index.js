import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 200px;
  height: 250px;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 30px;
  background-color: #48C9B0;
`;

const Name = styled.label`
  height: auto;
  font-family: 'Lato', 'Arial', sans-serif;
  margin: auto auto auto 10px;
  font-weight: bold;
`;

const Mas = styled.input`
  display: flex;
  height: 20px;
  margin: auto 5px auto auto;
`;

const Imagen = styled.div`
  display: flex;
  flex: 2;
  min-height: 100px;
  padding-right: auto;
  padding-left: auto;
  background-color: black;
`;

const Body = styled.div`
  flex: 3;
  padding: 10px;
  display: flex;
`;

const PokeCards = () => (
  <CardWrapper>
    <CardTitle>
      <Name>Pikachu</Name>
      <Mas type='submit' value='+' />
    </CardTitle>
    <Imagen />
    <Body>
      Color: Amarillo
      Tipo: Electrico
    </Body>
  </CardWrapper>
);

export default PokeCards;
