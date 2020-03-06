import React from 'react';
import styled from 'styled-components';

const TypeWrapper = styled.div`
  height: 40px;
  width: 120px;
  background-color: peru;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  border-radius: 15px;
`;

const Type = () => (
  <TypeWrapper>
    Normal
  </TypeWrapper>
);

export default Type;
