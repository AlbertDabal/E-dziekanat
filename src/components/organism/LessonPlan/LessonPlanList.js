import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LessonPlanItem from './LessonPlanItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ dashboard }) => (dashboard === 'dashboard' ? '50%' : '20%')};
  margin: 0px 5px;
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
      dataPlanLesson.Zajecia.map((item) => <LessonPlanItem dataLessonItem={item} key={nanoid()} />)
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
