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
  height: 150px;
  border-radius: 50%;
  margin: 30px auto 40px 50px;
`;

const Sidebar = () => {
  const links = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Pokemons', path: '/pokemon' },
    { text: 'Equipos', path: '/equipment' },
    { text: 'Favoritos', path: '/favorite' },
  ];
  return (
    <Sidenav>
      <LogoSpace>
        <a href='/'>
          <LogoImg src={Logo} alt='PokemonLabs' />
        </a>
      </LogoSpace>
      {
        links.map(({ text, path }) => (
          <SidebarButton path={path} text={text} key={text} />
        ))
      }
    </Sidenav>
  );
};

export default Sidebar;
