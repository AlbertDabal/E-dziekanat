import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from 'components/atoms/Heading/Heading';
import NavigationMain from 'components/organism/Navigation/NavigationMain';
import NavigationAdditional from 'components/organism/Navigation/NavigationAdditional';

const SidebarWrapper = styled.div`
  width: 19%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: hsl(215deg 50% 23%);
`;

const HeadingContainer = styled.div`
  width: 100%;
  text-align: center;
  color: #ffffff;
  padding: 4rem;
  border-bottom: 1px solid #ffffff;
`;

const Sidebar = (props) => (
  <SidebarWrapper>
    <HeadingContainer>
      <Heading>E-Dziekanat</Heading>
    </HeadingContainer>
    <NavigationMain />
    <NavigationAdditional />
  </SidebarWrapper>
);

Sidebar.propTypes = {};

export default Sidebar;
