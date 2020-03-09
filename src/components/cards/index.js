import React from 'react';
import styled from 'styled-components';
import Pikachu from '../../img/pikachu.png';
import Type from './tiposPokemon';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  height: 350px;
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

const Favorite = styled.input`
  display: flex;
  height: 30px;
  margin: auto 0 auto auto;
`;

const Mas = styled.input`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  margin: auto 5px auto 0;
`;

const Perfil = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  height: 250px;
`;

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

const Subtitle = styled.h3`
  height: 20px;
  margin: 0 auto 5px 10px;
  font-size: 0.6em;
`;

const Status = styled.p`
  margin: 0 auto 0 10px;
`;

const Imagen = styled.img`
  display: flex;
  height: 100px;
  width: 100px;
  margin: 10px auto 10px 10px;
`;

const Body = styled.div`
  flex: 3;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.5em;
  height: 200px;
`;

const DatosBatalla = styled.div`
  display: flex;
  margin: 5px;
  border: solid;
  border-color: #EAECEE;
  height: 60px;
`;

const PokeCards = () => (
  <CardWrapper>
    <CardTitle>
      <Name>Pikachu</Name>
      <Favorite type='button' value='Agregar' />
      <Mas type='submit' value='+' />
    </CardTitle>
    <Perfil>
      <Imagen src={Pikachu} alt='Foto de pokemon' />
      <StatusWrapper>
        <Subtitle>Status:</Subtitle>
        <Body>
          <Status>Nivel: 10</Status>
          <Status>Fuerza: 9</Status>
          <Status>Defensa: 7</Status>
          <Status>Stamina: 100</Status>
        </Body>
      </StatusWrapper>
    </Perfil>
    <DescriptionWrapper>
      <Subtitle>Descripción:</Subtitle>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce ullamcorper ex lobortis pellentesque tincidunt. In
        hac habitasse platea dictumst.
      </Body>
    </DescriptionWrapper>
    <DatosBatalla>
      <Type />
    </DatosBatalla>
  </CardWrapper>
);

export default PokeCards;
