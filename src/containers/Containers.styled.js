import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-width: 100%;
  font-size: 1.7em;
  font-family: 'Lato', 'Arial', sans-serif;
`;

const SidebarStyled = styled.div`
  flex: 1;
  display: flex;
  height: 100px;
  max-width: 300px;
`;

const BodyStyled = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: auto;
  padding-left: 5%;
`;

export {
  Wrapper,
  SidebarStyled,
  BodyStyled,
};
