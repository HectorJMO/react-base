import React from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './Containers.styled';
import Sidebar from '../components/sidebar/sidebar';

const Namebar = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  margin: 30px 30px 0 auto;
  font-weight: bold;
  font-size: 1.5em;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

const Name = styled.h1`
  height: 25px;
`;

const Title = styled.h2`
  height: 25px;
  margin-bottom: 50px;
`;

const Faltante = styled.div`
  display: flex;
  width: auto;
  height: 400px;
  background-color: gray;
  margin-right: 10%;
`;

const TeamContainer = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <Namebar>
        <Name>Pepe Picapapas</Name>
      </Namebar>
      <FavoriteWrapper>
        <Title>Equipos inscritos:</Title>
        <Faltante>Falta listado</Faltante>
      </FavoriteWrapper>
    </BodyStyled>
  </Wrapper>
);

export default TeamContainer;
