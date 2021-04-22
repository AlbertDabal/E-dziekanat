import React from 'react';
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
  justify-content: space-between;
  box-sizing: border-box;
  background: hsl(215deg 50% 23%);
`;

const WidthContainer = styled.div`
  width: 100%;
`;

const HeadingContainer = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  color: #ffffff;
  padding: 4rem;
`;

const Sidebar = (props) => (
  <SidebarWrapper>
    <WidthContainer>
      <HeadingContainer>
        <Heading>E-Dziekanat</Heading>
      </HeadingContainer>
      <NavigationMain />
    </WidthContainer>
    <NavigationAdditional />
  </SidebarWrapper>
);

export default Sidebar;
