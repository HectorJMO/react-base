import React from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './containers.styled';
import Sidebar from '../components/sidebar/sidebar';
import PokeCards from '../components/cards/index';
import Confirm from '../components/modales/confirmacion';
import Equipment from '../components/modales/crear';
import Buscador from '../components/buscador/index';

const CardWrapper = styled.div`
  width: 100%;
  max-height: 750px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
`;

const Namebar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 7vh;
  width: 100%;
  justify-content: flex-start;
  margin: 30px 30px 30px auto;
`;

const Modals = styled.div`
  display: flex;
  flex: 3;
  height: 44px;
  padding-left: 10px;
  align-items: center;
`;

const PokemonContainer = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <Namebar>
        <Buscador />
        <Modals>
          <BrowserRouter>
            <button type='button'>
              <Link to='/equipment'>Crear Equipo</Link>
              <Route path='/equipment' component={Equipment} />
            </button>
            <button type='button'>
              <Link to='/confirm'>Confirmar</Link>
              <Route path='/confirm' component={Confirm} />
            </button>
          </BrowserRouter>
        </Modals>
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

export default PokemonContainer;
