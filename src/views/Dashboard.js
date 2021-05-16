import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DashboardTemplate from 'templates/DashboardTemplate';
import Heading from 'components/atoms/Heading/Heading';
import ContainerDefault from 'components/organism/DashboardElements/ContainerDefault';
import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';
import { SetDashboardData } from 'api/FetchDashboard';
import { nanoid } from 'nanoid';
import Notifications from 'components/organism/Notifications/Notifications';

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

const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: hsl(215deg 50% 23%);
  border-radius: 30px;
  border: 1px solid #cbcbcd;
  padding: 15px;
`;

const HeadingTop = styled(Heading)`
  color: hsl(105, 55%, 96%);
  font-size: 20px;
  margin-bottom: 20px;
`;

const HeadingBottom = styled(Heading)`
  color: hsl(182, 43%, 76%);
`;

const Dashboard = (props) => {
  const [dashboardData, setDashbordData] = useState(null);

  useEffect(() => {
    FetchDashboard();
  }, []);

  async function FetchDashboard() {
    const res = await SetDashboardData();
    setDashbordData(res.data);
  }
  if (dashboardData !== null) {
    return (
      <DashboardTemplate>
        <SideWrapper>
          <SideContainer>
            <ContainerDefault>
              {dashboardData.plan.map((item) => (
                <LessonPlanList dataPlanLesson={item} key={nanoid()} dashboard="dashboard" />
              ))}
            </ContainerDefault>
          </SideContainer>
          <SideContainer style={{ flexDirection: 'column' }}>
            <InfoBar style={{ height: '30%' }}>
              <Info style={{ marginRight: '20px' }}>
                <HeadingTop>Kierunek</HeadingTop>
                <HeadingBottom>{dashboardData.Kierunek}</HeadingBottom>
              </Info>
              <Info>
                <HeadingTop>Rok</HeadingTop>
                <HeadingBottom>{dashboardData.Rok}</HeadingBottom>
              </Info>
            </InfoBar>
            <ContainerDefault style={{ height: '50%', border: '1px solid red' }}>
              <Notifications dataNotifications={dashboardData.powiadomienia} />
            </ContainerDefault>
          </SideContainer>
        </SideWrapper>
      </DashboardTemplate>
    );
  }
  return null;
};

export default Dashboard;
