import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import styled from 'styled-components';
import LessonPlanItem from './LessonPlanItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const LessonPlanList = () => (
  <Wrapper>
    <StyledHeading>Poniedziałek</StyledHeading>
    <LessonPlanItem />
    <LessonPlanItem />
    <LessonPlanItem />
  </Wrapper>
);

export default LessonPlanList;
