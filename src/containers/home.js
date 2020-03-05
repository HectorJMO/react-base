import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar/sidebar';
import PokeCards from '../components/cards/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  min-height: 100%; 
`;

const SidebarStyled = styled.div`
  flex: 1;
  display: flex;
  height: 100px;
  max-width: 300px;
`;

const BodyStyled = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: auto;
  padding-left: 5%;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Namebar = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  margin: 30px 30px 30px auto;
`;

const Name = styled.input`
  display: flex;
  flex: 1;
  padding: 10px;
  height: 20px;
`;

const Type = styled.div`
  display: flex;
  flex: 2;
  width: 25px;
`;

const HomeContainer = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <Namebar>
        <Name type='text' id='Pokename' size='50' placeholder='Nombre de un pokemon...' required />
        <Type>
          <select name='type' id='type'>
            <option value='Acero' selected>Acero</option>
            <option value='Agua'>Agua</option>
            <option value='Insecto'>Insecto</option>
            <option value='Dragon'>Dragon</option>
            <option value='Eléctrico'>Eléctrico</option>
            <option value='Fantasma'>Fantasma</option>
            <option value='Fuego'>Fuego</option>
            <option value='Hada'>Hada</option>
            <option value='Hielo'>Hielo</option>
            <option value='Lucha'>Lucha</option>
            <option value='Normal'>Normal</option>
            <option value='Planta'>Planta</option>
            <option value='Psíquico'>Psíquico</option>
            <option value='Roca'>Roca</option>
            <option value='Oscuridad'>Oscuridad</option>
            <option value='Tierra'>Tierra</option>
            <option value='Veneno'>Veneno</option>
            <option value='Volador'>Volador</option>
            <option value='???'>???</option>
          </select>
        </Type>
      </Namebar>
      <CardWrapper>
        <PokeCards />
        <PokeCards />
        <PokeCards />
        <PokeCards />
        <PokeCards />
        <PokeCards />
        <PokeCards />
        <PokeCards />
        <PokeCards />
        <PokeCards />
      </CardWrapper>
    </BodyStyled>
  </Wrapper>
);

export default HomeContainer;
