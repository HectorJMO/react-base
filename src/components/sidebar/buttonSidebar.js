import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = styled(Link)`
  padding-left: 25px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const Li = styled.li`
  padding-bottom: 15px;
  list-style: none;
`;

const SidebarButton = (props) => {
  const { path, text } = props;
  return (
    <Li>
      <Button to={path}>{text}</Button>
    </Li>
  );
};

SidebarButton.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SidebarButton;
