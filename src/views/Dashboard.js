import React from 'react';
import styled from 'styled-components';

import DashboardTemplate from 'templates/DashboardTemplate';
import Heading from 'components/atoms/Heading/Heading';
import ContainerDefault from 'components/organism/DashboardElements/ContainerDefault';

const SideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SideContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  padding: 0 20px;
  margin: auto;
`;

const Dashboard = (props) => (
  <DashboardTemplate>
    <SideWrapper>
      <SideContainer>
        <ContainerDefault>
          <Heading>TEST</Heading>
        </ContainerDefault>
      </SideContainer>
      <SideContainer style={{ flexDirection: 'column' }}>
        <ContainerDefault style={{ height: '50%', border: '1px solid red', marginBottom: '40px' }}>
          <h1>RIGHT TOP</h1>
        </ContainerDefault>
        <ContainerDefault style={{ height: '50%', border: '1px solid red' }}>
          <Heading>TEST</Heading>
        </ContainerDefault>
      </SideContainer>
    </SideWrapper>
  </DashboardTemplate>
);

export default Dashboard;
