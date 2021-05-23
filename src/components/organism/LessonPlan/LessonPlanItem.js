import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Modal from './Modal';
// prettier-ignore
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:space-between;
  flex-direction: column;
  padding: 10px 10px;
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
  align-items: center;
  margin-bottom: 5px;
`;
// prettier-ignore
const ParagraphSmall = styled(Paragraph)`
  font-size: ${({ dashboard }) => (dashboard === 'dashboard' ? '16px' : '13px')};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;
// prettier-ignore
const Link = styled.a`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  font-size: ${({ dashboard }) => (dashboard === 'dashboard' ? '16px' : '13px')};
  padding: 2px 8px;
  cursor: pointer;

 

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
const LessonType = styled(Paragraph)`
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  font-size: ${({ dashboard }) => (dashboard === 'dashboard' ? '16px' : '13px')};
`;

const LessonPlanItem = ({ dataLessonItem, dashboard }) => {
  const [open, setOpen] = useState(false);

  const IsOpen = () => {
    setOpen(!open);
  };

  const data = `${dataLessonItem.GodzRozp.substr(11, 5)}-${dataLessonItem.GodzZakon.substr(11, 5)}`;
  const wykladowca = `${dataLessonItem.ImieWykladowcy.substr(0, 1)} ${dataLessonItem.NazwiskoWykladowcy}`;
  return (
    <Wrapper typeLesson={dataLessonItem.Typ}>
      {open && <Modal IsOpen={IsOpen} data={dataLessonItem} />}
      <Title>
        <LessonType dashboard={dashboard}>{dataLessonItem.Typ}</LessonType>

        <ParagraphSmall dashboard={dashboard}>{data}</ParagraphSmall>
      </Title>
      <ParagraphSmall dashboard={dashboard}>{dataLessonItem.Nazwa}</ParagraphSmall>
      <Bottom>
        <ParagraphSmall dashboard={dashboard}>{wykladowca}</ParagraphSmall>
        <Link typeLesson={dataLessonItem.Typ} onClick={() => IsOpen()} dashboard={dashboard}>
          przejdz
        </Link>
      </Bottom>
    </Wrapper>
  );
};

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
  dashboard: PropTypes.string,
};

LessonPlanItem.defaultProps = {
  dashboard: 'lesson',
};

export default LessonPlanItem;
