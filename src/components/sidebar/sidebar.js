import React from 'react';
import styled from 'styled-components';

import Logo from '../../img/logo.jpeg';
import SidebarButton from './buttonSidebar';

const Sidenav = styled.div`
  position: fixed;
  height: 100%;
  width: 300px;
  z-index: 1;
  background-color: #48C9B0;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-size: 1.7em;
  font-family: 'Lato', 'Arial', sans-serif;
`;

const LogoSpace = styled.div`
  height: auto;
  width: 100%;
`;

const LogoImg = styled.img`
  height: 100px;
  border-radius: 50%;
  margin: 20px auto 0 100px;
`;

const Sidebar = () => {
  const links = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Pokemons', path: '/pokemons' },
    { text: 'Equipos', path: '/equipos' },
    { text: 'Favoritos', path: '/favoritos' },
  ];
  return (
    <Sidenav>
      <LogoSpace>
        <LogoImg src={Logo} alt='PokemonLabs' />
      </LogoSpace>
      {
        links.map(({ text }) => (
          <SidebarButton path='/' text={text} key={text} />
        ))
      }
    </Sidenav>
  );
};

export default Sidebar;
