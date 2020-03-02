import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar/sidebar';

const Section = styled.section`
  background-color: #fff;
  color: #555;
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: 300;   
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const HomeContainer = () => (
  <Section>
    <Sidebar />
  </Section>
);

export default HomeContainer;
