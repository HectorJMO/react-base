import React from 'react';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './containers.styled';
import Sidebar from '../components/sidebar/sidebar';

const PokemonProfile = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <p>HOli</p>
    </BodyStyled>
  </Wrapper>
);

export default PokemonProfile;
