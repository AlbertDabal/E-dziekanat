import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// prettier-ignore
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:space-between;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
  height: 170px;

  

  ${({ typeLesson }) => typeLesson === 'Laboratoria'
  && css`
      background-color: ${({ theme }) => theme.lessonColorLab};
      border-left: 5px solid ${({ theme }) => theme.buttonLessonColorLab};
    `}
  ${({ typeLesson }) => typeLesson === 'Wykład'
  && css`
      background-color: ${({ theme }) => theme.lessonColorWyk};
      border-left: 5px solid ${({ theme }) => theme.buttonLessonColorWyk};
    `}
  ${({ typeLesson }) => typeLesson === 'Ćwiczenia'
  && css`
      background-color: ${({ theme }) => theme.lessonColorPro};
      border-left: 5px solid ${({ theme }) => theme.buttonLessonColorPro};
      }
    `}
  ${({ typeLesson }) => typeLesson === 'Seminarium'
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
// prettier-ignore
const ParagraphSmall = styled(Paragraph)`
  ${sessionStorage.getItem('Kod_roli') === 'wykladowca'
  && css`
    font-size: 12px;
  `}
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

  ${sessionStorage.getItem('Kod_roli') === 'wykladowca'
  && css`
    font-size: 12px;
     padding: 2px 10px;
  `}

  ${({ typeLesson }) => typeLesson === 'Laboratoria'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorLab};
    `}
  ${({ typeLesson }) => typeLesson === 'Wykład'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorWyk};
    `}
  ${({ typeLesson }) => typeLesson === 'Ćwiczenia'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorPro};
    `}
  ${({ typeLesson }) => typeLesson === 'Seminarium'
  && css`
      background-color: ${({ theme }) => theme.buttonLessonColorSem};
    `}
`;
// prettier-ignore
const LessonType = styled(Paragraph)`
  font-weight: 700;
  color: white;
  text-transform: uppercase;

  ${sessionStorage.getItem('Kod_roli') === 'wykladowca'
  && css`
    font-size: 12px;
  `}
`;
// prettier-ignore
const LessonPlanItem = ({ dataLessonItem }) => (
  <Wrapper typeLesson={dataLessonItem.Typ}>
    <Title>
      <LessonType>{dataLessonItem.Typ}</LessonType>
      {/* eslint-disable-next-line max-len */}
      <ParagraphSmall>{`${dataLessonItem.GodzRozp.substr(11, 5)}-${dataLessonItem.GodzZakon.substr(11, 5)}`}</ParagraphSmall>
    </Title>
    <ParagraphSmall>{dataLessonItem.Nazwa}</ParagraphSmall>
    <Bottom>
      {/* eslint-disable-next-line max-len */}
      <ParagraphSmall>{`${dataLessonItem.ImieWykladowcy.substr(0, 1)} ${dataLessonItem.NazwiskoWykladowcy}`}</ParagraphSmall>
      <Link typeLesson={dataLessonItem.Typ}>przejdz</Link>
    </Bottom>
  </Wrapper>
);

LessonPlanItem.propTypes = {
  dataLessonItem: PropTypes.shape({
    DodatkoweMaterialy: PropTypes.string,
    Ects: PropTypes.number,
    GodzRozp: PropTypes.string,
    GodzZakon: PropTypes.string,
    IloscGodzin: PropTypes.number,
    ImieWykladowcy: PropTypes.string,
    LinkDoKursu: PropTypes.string,
    Nazwa: PropTypes.string,
    NazwaGrupy: PropTypes.string,
    NazwiskoWykladowcy: PropTypes.string,
    NumerSemestru: PropTypes.number,
    Opis: PropTypes.string,
    Typ: PropTypes.string,
  }).isRequired,
};

export default LessonPlanItem;
