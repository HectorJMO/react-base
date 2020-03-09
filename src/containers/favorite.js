import React from 'react';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './containers.styled';
import Sidebar from '../components/sidebar/sidebar';
import Charizard from '../img/charizard.png';

const Namebar = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  margin: 30px 30px 0 auto;
  font-weight: bold;
  font-size: 1.5em;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

const Name = styled.h1`
  height: 25px;
`;

const Title = styled.h2`
  height: 25px;
  margin-bottom: 50px;
`;

const Image = styled.img`
  max-height: 250px;
  width: auto;
`;

const Carousel = styled.div`
  margin: 10px 60px 10px 20px;
`;

const FavoriteContainer = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <Namebar>
        <Name>Pepe Picapapas</Name>
      </Namebar>
      <FavoriteWrapper>
        <Title>Lista de favoritos:</Title>
        <Carousel>
          <Slider dots>
            <div>
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
            </div>
            <div>
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
            </div>
            <div>
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
              <Image src={Charizard} />
            </div>
          </Slider>
        </Carousel>
      </FavoriteWrapper>
    </BodyStyled>
  </Wrapper>
);

export default FavoriteContainer;
