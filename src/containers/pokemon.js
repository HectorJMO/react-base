import React from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './containers.styled';
import Sidebar from '../components/sidebar/sidebar';
import PokeCards from '../components/cards/index';
import Equipment from '../components/modales/crear';
import Buscador from '../components/buscador/index';
import Confirm from '../components/modales/confirmacion';

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

const PokemonContainer = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Wrapper>
      <SidebarStyled>
        <Sidebar />
      </SidebarStyled>
      <BodyStyled>
        <Namebar>
          <Buscador />
          <Modals>
            <div>
              <button type='button' onClick={() => setShow(true)}>
                Equipment
              </button>
              <Equipment show={show} setShow={setShow} />
            </div>
            <div>
              <button type='button' onClick={() => setShow(true)}>
                Confirmacion
              </button>
              <Confirm show={show} setShow={setShow} />
            </div>
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
};

export default PokemonContainer;
