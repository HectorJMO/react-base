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

const Name = styled.div`
  display: flex;
  height: 15vh;
  line-height: 90px;
  font-size: 1.2em;
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

const Body = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
`;

const Message = styled.label`
  height: auto;
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 2.2em;
  margin: 0;
  margin-left: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  border-style: solid;
  border-color: grey;
  margin: 20px;
  height: 60vh;
  width: 500px;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  margin: auto;
`;

const DescripcionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:59%;
  height: 35vh;
`;

const Subtitle = styled.label`
  margin: 0 20px 0 10px;
  width: 100%;
  font-size: 32px;
  font-weight: bold;
`;

const Descripcion = styled.p`
  margin: 10px 20px auto 10px;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
  text-align: justify;
  overflow: auto;
`;

const InfoExtra = styled.div`
  display: flex;
  margin: 20px;
  padding: 20px;
  border-style: solid;
  border-color: gray;
  flex-direction: column;
  width: 80%;
  height: 35vh;
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StatsInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 48vh;
  margin-right: 0.5vw;
`;

const PokemonProfile = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <Body>
        <ImageWrapper>
          <Image src={Pokemomn} alt='Pikachu' />
        </ImageWrapper>
        <DescripcionWrapper>
          <Name>
            <Message>Pikachu</Message>
          </Name>
          <StatsWrapper>
            <StatsInner>
              <Subtitle>Descripcion</Subtitle>
              <Descripcion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tupis lorem, pr
                aximus vel tellus quis, lacinia euismod quam. Suspendisse imperdiet feugat lec
                tus eget ultrices. Aenean turpis tellus, tincidunt in fringila eget, luctus vi
                tae diam. Phasellus semper massa felis, in faucibus ante malesuda eu. Interdur
                m et malesuada fames ac ante ips.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tupis lorem, pr
                aximus vel tellus quis, lacinia euismod quam. Suspendisse imperdiet feugat lec
                tus eget ultrices. Aenean turpis tellus, tincidunt in fringila eget, luctus vi
                tae diam. Phasellus semper massa felis, in faucibus ante malesuda eu. Interdur
                m et malesuada fames ac ante ips.
              </Descripcion>
            </StatsInner>
            <StatsInner>
              <Subtitle>Stats:</Subtitle>
              <Descripcion>
                CP: 332
                <br />
                HP: 46
                <br />
                Altura: 1.05m
                <br />
                Peso: 27hg
              </Descripcion>
            </StatsInner>
          </StatsWrapper>
        </DescripcionWrapper>
      </Body>
      <InfoExtra>
        <Subtitle>Descripción de batalla:</Subtitle>
        <Type />
      </InfoExtra>
    </BodyStyled>
  </Wrapper>
);

export default PokemonProfile;
