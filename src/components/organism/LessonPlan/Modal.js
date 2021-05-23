import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// prettier-ignore
const Wrapper = styled.div`
  position: absolute;
  left: 35%;
  top: 20%;
  width: 50%;
  height: 48vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 999;

  align-items: flex-start;
  padding: 30px;
  ${({ typeLesson }) => typeLesson === 'Laboratoria'
  && css`
      background-color: ${({ theme }) => theme.lessonColorLab};
      border-left: 10px solid ${({ theme }) => theme.buttonLessonColorLab};
    `}
  ${({ typeLesson }) => typeLesson === 'Wykład'
  && css`
      background-color: ${({ theme }) => theme.lessonColorWyk};
      border-left: 10px solid ${({ theme }) => theme.buttonLessonColorWyk};
    `}
  ${({ typeLesson }) => typeLesson === 'Ćwiczenia'
  && css`
      background-color: ${({ theme }) => theme.lessonColorPro};
      border-left: 10px solid ${({ theme }) => theme.buttonLessonColorPro};
      }
    `}
  ${({ typeLesson }) => typeLesson === 'Seminarium'
  && css`
      background-color: ${({ theme }) => theme.lessonColorSem};
      border-left: 10px solid ${({ theme }) => theme.buttonLessonColorSem};
      
    `}
`;

const WrapperFade = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(98, 98, 98, 0.2);
`;

// prettier-ignore
const Link = styled.a`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  background-color: ${({ theme }) => theme.buttonLessonColorPro};
  color: white;
  font-size: 20px;
  padding: 15px 10px;
  cursor: pointer;
  width: 400px;
  margin: 0px 5px;
  justify-content: center;


  
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

const Title = styled(Heading)`
  text-transform: uppercase;
  font-weight: 700;

  color: white;
`;

const HeadingStyled = styled(Heading)`
  margin-top: 30px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Bottom = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Modal = ({ IsOpen, data }) => (
  <WrapperFade>
    <Wrapper typeLesson={data.Typ}>
      <Top>
        <Title big>{data.Typ}</Title>
        <Heading>{`${data.GodzRozp.substr(11, 5)}-${data.GodzZakon.substr(11, 5)}`}</Heading>
      </Top>
      <HeadingStyled>{`${data.Nazwa}`}</HeadingStyled>
      <HeadingStyled>{`${data.ImieWykladowcy} ${data.NazwiskoWykladowcy}`}</HeadingStyled>
      {/* <HeadingStyled>{`Link do kursu ${data.LinkDoKursu}`}</HeadingStyled>
      <HeadingStyled>{`Dodatkowe Materiały ${data.DodatkoweMaterialy}`}</HeadingStyled> */}
      <HeadingStyled>{`Ilość godzin ${data.IloscGodzin}`}</HeadingStyled>
      <HeadingStyled>{`Ects ${data.Ects}`}</HeadingStyled>
      <Bottom>
        <Link typeLesson={data.Typ} onClick={() => IsOpen()}>
          powrót
        </Link>
        <Link typeLesson={data.Typ} onClick={() => IsOpen()}>
          dodatkowe materiały
        </Link>
        <Link typeLesson={data.Typ} onClick={() => IsOpen()}>
          link do kursu
        </Link>
      </Bottom>
    </Wrapper>
  </WrapperFade>
);

Modal.propTypes = {
  IsOpen: PropTypes.func.isRequired,
  data: PropTypes.shape({
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

export default Modal;
