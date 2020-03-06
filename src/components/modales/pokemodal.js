import React from 'react';
import styled from 'styled-components';

const Blackout = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #17202A;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 500px;
  height: 700px;
  background-color: #EAECEE;
  font-family: 'Lato', 'Arial', sans-serif;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-height: 75px;
  background-color: #48C9B0;
`;

const Body = styled.div`
  flex: 2;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.5em;
`;

const Message = styled.label`
  height: auto;
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: bold;
  margin: auto;
  text-justify: center;
`;

const Imagen = styled.div`
  display: flex;
  flex: 2;
  min-height: 100px;
  padding-right: auto;
  padding-left: auto;
  background-color: black;
`;


const Pokemodal = () => (
  <Blackout>
    <CardWrapper>
      <CardTitle>
        <Message>Pikachu</Message>
      </CardTitle>
      <Body>
        <Imagen />
      </Body>
    </CardWrapper>
  </Blackout>
);

export default Pokemodal;
