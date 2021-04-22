import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainWrapper = styled.div`
  width: 81%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #201e1e;
`;

const Main = ({ children }) => <MainWrapper>{children}</MainWrapper>;

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
