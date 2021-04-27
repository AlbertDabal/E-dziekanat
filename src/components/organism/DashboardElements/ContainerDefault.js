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

const ContainerDefault = ({ style, children }) => <DefaultBox style={style}>{children}</DefaultBox>;

ContainerDefault.propTypes = {
  style: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContainerDefault;
