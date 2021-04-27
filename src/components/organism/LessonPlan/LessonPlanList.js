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

const LessonPlanEmpty = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 20px;
  width: 20%;
`;

const LessonPlanList = ({ dataPlanLesson }) => (
  <Wrapper>
    {console.log(dataPlanLesson.Zajecia)}
    <StyledHeading>{dataPlanLesson.Dzien.substr(0, 10)}</StyledHeading>
    {dataPlanLesson.Zajecia ? (
      dataPlanLesson.Zajecia.map((item) => <LessonPlanItem dataLessonItem={item} />)
    ) : (
      <LessonPlanEmpty />
    )}
  </Wrapper>
);

LessonPlanList.propTypes = {
  dataPlanLesson: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LessonPlanList;
