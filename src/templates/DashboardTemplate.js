import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from 'components/organism/Navigation/Sidebar';
import TopBar from 'components/organism/TopBar/TopBar';

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  width: 81%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #f7f8fc;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

const DashboardTemplate = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <MainWrapper>
      <TopBar />
      <ContentWrapper>{children}</ContentWrapper>
    </MainWrapper>
  </Wrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardTemplate;
