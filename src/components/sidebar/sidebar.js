import React from 'react';
import styled from 'styled-components';

import SidebarButton from './buttonSidebar';

const Sidenav = styled.div`
  position: fixed;
  height: 100%;
  width: 300px;
  z-index: 1;
  background-color: #48C9B0;
  overflow-x: hidden;
  padding-top: 175px;
  margin: 0px;
  font-size: 1.7em;
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
      {
        links.map(({ text }) => (
          <SidebarButton path='/' text={text} key={text} />
        ))
      }
    </Sidenav>
  );
};

export default Sidebar;
