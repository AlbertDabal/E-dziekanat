import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DefaultBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #cbcbcd;
  padding: 15px;
`;

const ContainerDefault = ({ children }) => <DefaultBox>{children}</DefaultBox>;

ContainerDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContainerDefault;
