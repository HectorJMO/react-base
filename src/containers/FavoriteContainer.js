import React from 'react';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './Containers.styled';
import Sidebar from '../components/sidebar/sidebar';

const FavoriteContainer = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <p>HOli</p>
    </BodyStyled>
  </Wrapper>
);

export default FavoriteContainer;
