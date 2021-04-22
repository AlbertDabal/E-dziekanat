import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from 'components/organism/Navigation/Sidebar';

const Wrapper = styled.div`
  display: flex;
`;

const DashboardTemplate = ({ children }) => (
  <Wrapper>
    <Sidebar />
    {children}
  </Wrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardTemplate;
