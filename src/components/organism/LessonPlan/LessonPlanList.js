import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import PropTypes from 'prop-types';
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

const LessonPlanList = ({ dataPlanLesson }) => (
  <Wrapper>
    <StyledHeading>{dataPlanLesson.Dzien}</StyledHeading>
    {dataPlanLesson.Zajecia.map((item) => (
      <LessonPlanItem dataLessonItem={item} />
    ))}
  </Wrapper>
);

LessonPlanList.propTypes = {
  dataPlanLesson: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LessonPlanList;
