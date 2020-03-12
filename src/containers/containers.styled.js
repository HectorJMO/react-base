import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  font-size: 1.7em;
  font-family: 'Lato', 'Arial', sans-serif;
`;

const SidebarStyled = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  max-width: 350px;
`;

const BodyStyled = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-left: 5%;
`;

export {
  Wrapper,
  SidebarStyled,
  BodyStyled,
};
