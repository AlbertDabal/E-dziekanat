import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// prettier-ignore
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;

  ${({ typeLesson }) => typeLesson === 'laboratorium'
  && css`
      background-color: ${({ theme }) => theme.lessonColorLab};
      border-left: 5px solid ${({ theme }) => theme.buttonLessonColorLab};
    `}
  ${({ typeLesson }) => typeLesson === 'wykład'
  && css`
      background-color: ${({ theme }) => theme.lessonColorWyk};
      border-left: 5px solid ${({ theme }) => theme.buttonLessonColorWyk};
    `}
  ${({ typeLesson }) => typeLesson === 'projekt'
  && css`
      background-color: ${({ theme }) => theme.lessonColorPro};
      border-left: 5px solid ${({ theme }) => theme.buttonLessonColorPro};
      }
    `}
  ${({ typeLesson }) => typeLesson === 'seminarium'
  && css`
      background-color: ${({ theme }) => theme.lessonColorSem};
      border-left: 5px solid ${({ theme }) => theme.buttonLessonColorSem};
      
    `}
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
// prettier-ignore
const Link = styled.a`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  color: white;
  padding: 2px 10px;

  ${({ typeLesson }) => typeLesson === 'laboratorium'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorLab};
    `}
  ${({ typeLesson }) => typeLesson === 'wykład'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorWyk};
    `}
  ${({ typeLesson }) => typeLesson === 'projekt'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorPro};
    `}
  ${({ typeLesson }) => typeLesson === 'seminarium'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorSem};
    `}
`;

const LessonType = styled(Paragraph)`
  font-weight: 700;
  color: white;
  text-transform: uppercase;
`;

const LessonPlanItem = ({ dataLessonItem }) => (
  <Wrapper typeLesson={dataLessonItem.Typ}>
    <Title>
      <LessonType>{dataLessonItem.Typ}</LessonType>
      <Paragraph>{`${dataLessonItem.GodzRozp}-${dataLessonItem.GodzZakon}`}</Paragraph>
    </Title>
    <Paragraph>{dataLessonItem.Nazwa}</Paragraph>
    <Bottom>
      <Paragraph>{`${dataLessonItem.ImieWykladowcy.substr(0, 1)} ${dataLessonItem.NazwiskoWykladowcy}`}</Paragraph>
      <Link typeLesson={dataLessonItem.Typ}>przejdz</Link>
    </Bottom>
  </Wrapper>
);

LessonPlanItem.propTypes = {
  dataLessonItem: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LessonPlanItem;
