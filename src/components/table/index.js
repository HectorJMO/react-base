import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  font-size: 1em;
  border-style: solid;
  border-color: gray;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  font-weight: bold;
  background-color: #48C9B0;
`;

const Number = styled.div`
  width: 10%;
`;

const Name = styled.div`
  width: 70%;
`;

const ChooseTitle = styled.div`
  width: 10%;
  text-align: center;
`;

const DeleteTitle = styled.div`
  width: 10%;
  text-align: center;
`;

const Choose = styled.input`
  width: 10%;
`;

const Delete = styled.input`
  width: 10%;
`;

const BlackRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  background-color: #D5D8DC;
`;

const WhiteRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  background-color: #FDFEFE;
`;

const Table = () => (
  <Wrapper>
    <Header>
      <Number>#</Number>
      <Name>Nombre</Name>
      <ChooseTitle>Elegir</ChooseTitle>
      <DeleteTitle>Sacar</DeleteTitle>
    </Header>
    <BlackRow>
      <Number>1</Number>
      <Name>Torneo</Name>
      <Choose type='button' value='o' />
      <Delete type='button' value='-' />
    </BlackRow>
    <WhiteRow>
      <Number>2</Number>
      <Name>Práctica</Name>
      <Choose type='button' value='o' />
      <Delete type='button' value='-' />
    </WhiteRow>
    <BlackRow>
      <Number>3</Number>
      <Name>Aguascalientes</Name>
      <Choose type='button' value='o' />
      <Delete type='button' value='-' />
    </BlackRow>
    <WhiteRow>
      <Number>4</Number>
      <Name>Equilibrado</Name>
      <Choose type='button' value='o' />
      <Delete type='button' value='-' />
    </WhiteRow>
    <BlackRow>
      <Number>5</Number>
      <Name>Game of Thrones (Dragones)</Name>
      <Choose type='button' value='o' />
      <Delete type='button' value='-' />
    </BlackRow>
    <WhiteRow>
      <Number>6</Number>
      <Name>Común y corriente</Name>
      <Choose type='button' value='o' />
      <Delete type='button' value='-' />
    </WhiteRow>
  </Wrapper>
);

export default Table;
