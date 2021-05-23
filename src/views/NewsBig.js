import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsTemplate from 'templates/NewsTemplate';

import logo from 'images/backgroud.jpg';
import Button from 'components/atoms/Button/Button';
import { formatDataTest } from 'function/FormatDatePl';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: white;
  width: 78.5%;
  height: 86vh;
  text-decoration: none;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
`;

const LogoImage = styled.img`
  border-radius: 18px 18px 0px 0px;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  margin-top: 30px;
  font-size: 26px;
  font-weight: 600;
  line-height: 38px;
  margin-top: 40px;
`;

const Description = styled.div`
  display: flex;
  height: 50%;
  font-size: 16px;
  line-height: 22px;
  margin: 55px;
`;

const About = styled.div`
  display: flex;
  margin: 20px;
  width: 96%;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 16px;
`;
const AboutLeft = styled.div`
  display: flex;
  margin-left: 50px;
`;

const ButtonStyled = styled(Button)`
  height: 40px;
`;

const NewsBig = ({ match, data, IsOpen }) => {
  const date = formatDataTest(data.Data_wystawienia);
  return (
    <Wrapper>
      <Image>
        <LogoImage src={logo} />
      </Image>
      <Title>{data.Tytul}</Title>
      <Description>{data.Tresc}</Description>
      <About>
        <ButtonStyled onClick={() => IsOpen()} typeButton="zaloguj">
          Powrót
        </ButtonStyled>
        <AboutLeft>{`${date[2]} ${date[1]} ${date[0]} od ${data.Tworca}`}</AboutLeft>
      </About>
    </Wrapper>
  );
};

export default NewsBig;

NewsBig.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  data: PropTypes.shape({
    Data_wystawienia: PropTypes.string,
    Tytul: PropTypes.string,
    Tresc: PropTypes.string,
    Tworca: PropTypes.string,
  }).isRequired,
  IsOpen: PropTypes.func.isRequired,
};
