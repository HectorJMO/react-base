import React from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  SidebarStyled,
  BodyStyled,
} from './containers.styled';
import Sidebar from '../components/sidebar/sidebar';
import Table from '../components/table/index';

const Namebar = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  margin: 30px 30px 0 auto;
  font-weight: bold;
  font-size: 1.4em;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const Name = styled.h1`
  height: 25px;
`;

const Title = styled.h2`
  height: auto;
  margin: 20px 0 10px 0;
`;

const TableWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: auto;
  margin-right: 10%;
`;

const EquipmentContainer = () => (
  <Wrapper>
    <SidebarStyled>
      <Sidebar />
    </SidebarStyled>
    <BodyStyled>
      <Namebar>
        <Name>SpaceshipLabs Team</Name>
      </Namebar>
      <FavoriteWrapper>
        <Title>Integrantes:</Title>
        <TableWrapper>
          <Table />
        </TableWrapper>
      </FavoriteWrapper>
    </BodyStyled>
  </Wrapper>
);

export default EquipmentContainer;
