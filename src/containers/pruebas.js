import React from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './containers.styled';
import Type from '../components/cards/tiposPokemon';
import Sidebar from '../components/sidebar/sidebar';
import Pokemomn from '../img/pikachu.png';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto auto auto 20px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 700px;
  height: 900px;
  background-color: #EAECEE;
  font-family: 'Lato', 'Arial', sans-serif;
`;

const CardTitle = styled.div`
  display: flex;
  height: 10%;
  background-color: #48C9B0;
  text-align: center;
  line-height: 90px;
`;

const Body = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.5em;
  height: 60%;
`;

const Message = styled.label`
  height: auto;
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  margin: 0;
  margin-left: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  height: 350px;
  width: 50%;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  margin: auto;
`;

const DescripcionWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 350px;
`;

const Subtitle = styled.label`
  margin: 0 20px 10px 10px;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
`;

const Descripcion = styled.p`
  margin: 10px 20px auto 10px;
  font-size: 20px;
`;

const InfoExtra = styled.div`
  margin: 20px;
  padding: 20px;
  border-style: solid;
  border-color: gray;
  flex-direction: column;
  display: flex;
  width: auto;
  height: 30%;
`;

const PokemonProfile = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <CardWrapper>
        <CardTitle>
          <Message>Pikachu</Message>
        </CardTitle>
        <Body>
          <ImageWrapper>
            <Image src={Pokemomn} alt='Pikachu' />
          </ImageWrapper>
          <DescripcionWrapper>
            <Subtitle>Descripcion</Subtitle>
            <Descripcion>
              LLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tupis lorem, maximus v
              el tellus quis, lacinia euismod quam. Suspendisse imperdiet feugat lectus eget ultrice
              s. Aenean turpis tellus, tincidunt in fringila eget, luctus vitae diam. Phasellus semp
              er massa felis, in faucibus ante malesuda eu. Interdum et malesuada fames ac ante ips.
            </Descripcion>
          </DescripcionWrapper>
        </Body>
        <InfoExtra>
          <Subtitle>Descripción de batalla:</Subtitle>
          <Type />
        </InfoExtra>
      </CardWrapper>
    </BodyStyled>
  </Wrapper>
);

export default PokemonProfile;
