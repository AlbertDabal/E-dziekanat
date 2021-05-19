import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LessonPlanItem from './LessonPlanItem';
// prettier-ignore

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ dashboard }) => (dashboard === 'dashboard' ? '50%' : '14%')};
  

  margin: 0px 2px;
`;

const StyledHeading = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LessonPlanEmpty = styled.div`
  display: flex;
  width: 20%;
`;

const LessonPlanList = ({ dataPlanLesson, dashboard }) => (
  <Wrapper dashboard={dashboard}>
    <StyledHeading>
      <Heading>{dataPlanLesson.Dzien.substr(0, 10)}</Heading>
      <Paragraph>{dataPlanLesson.DzienTygodnia}</Paragraph>
    </StyledHeading>
    {dataPlanLesson.Zajecia ? (
      dataPlanLesson.Zajecia.map((item) => (
        <LessonPlanItem dataLessonItem={item} key={nanoid()} dashboard={dashboard} />
      ))
    ) : (
      <LessonPlanEmpty />
    )}
  </Wrapper>
);

LessonPlanList.propTypes = {
  dataPlanLesson: PropTypes.shape({
    Dzien: PropTypes.string,
    DzienTygodnia: PropTypes.string,
    Zajecia: PropTypes.string,
  }).isRequired,
  dashboard: PropTypes.string,
};

LessonPlanList.defaultProps = {
  dashboard: 'lesson',
};

export default LessonPlanList;
