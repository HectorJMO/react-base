import React from 'react';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';
import {
  Wrapper,
  SidebarStyled,
} from './containers.styled';
import Sidebar from '../components/sidebar/sidebar';
import Table from '../components/table/index';
import Perfil from '../img/perfil.png';
import Charizard from '../img/charizard.png';

const Namebar = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  margin: 20px 20px 0 auto;
  font-weight: bold;
  font-size: 1.2em;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: 20px 0 60px 0;
  height: 20%;
`;

const BodyStyled = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-left: 5vw;
  overflow: auto;
`;

const Name = styled.h1`
  height: 25px;
  font-size: 1.5em;
`;

const Title = styled.h2`
  height: 25px;
  margin: 10px auto 20px 0;
  font-size: 1.1em;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 25px;
`;

const Descripcion = styled.div`
  display: flex;
  width: 100%;
  margin-right: 50%;
`;

const Image = styled.img`
  margin: 20px 30px 40px 30px;
  width: 200px;
  height: 210px;
`;

const CarouselWrapper = styled.div`
  width: 80%;
`;

const TableWrapper = styled.div`
  width: 80%;
  margin-bottom: 30px;
`;

const DashboardContainer = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <Namebar>
        <Name>ChibakuVizard</Name>
      </Namebar>
      <FavoriteWrapper>
        <Image src={Perfil} alt='Foto de perfil' />
        <DescriptionWrapper>
          <Title>Datos generales:</Title>
          <Descripcion>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor
            risus a dignissim pellentesque. Nunc nibh massa, ornare sit amet ipsum id.
          </Descripcion>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <Title>Status:</Title>
          <Descripcion>Nivel: 100</Descripcion>
          <Descripcion>Velocidad: 20</Descripcion>
          <Descripcion>Capacidad: 10</Descripcion>
          <Descripcion>Stamina: 100</Descripcion>
        </DescriptionWrapper>
      </FavoriteWrapper>
      <CarouselWrapper>
        <Title>Pokemons favoritos: </Title>
        <Slider dots>
          <div>
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
          </div>
          <div>
            <Image src={Charizard} />
            <Image src={Charizard} />
            <Image src={Charizard} />
            <Image src={Charizard} />
          </div>
        </Slider>
      </CarouselWrapper>
      <TableWrapper>
        <Title>Miembro de estos equipos:</Title>
        <Table />
      </TableWrapper>
    </BodyStyled>
  </Wrapper>
);

export default DashboardContainer;
