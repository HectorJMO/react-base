import React from 'react';
import styled from 'styled-components';

const TypeWrapper = styled.div`
  height: 20px;
  width: 60px;
  background-color: peru;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
  border-radius: 15px;
  margin: 5px;
`;

const Type = () => (
  <TypeWrapper>
    Normal
  </TypeWrapper>
);

export default Type;
