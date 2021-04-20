import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.alertColorSucces};
`;

const DashboardTemplate = ({ children }) => (
  <Wrapper>
    <div>
      <h1>Test h1</h1>
      {children}
    </div>
  </Wrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardTemplate;
