import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsTemplate from 'templates/NewsTemplate';

import logo from 'images/backgroud.jpg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
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
  width: 100%;
  justify-content: space-between;
  font-size: 16px;
  line-height: 16px;
`;
const AboutLeft = styled.div`
  display: flex;
  margin-left: 50px;
`;
const AboutRight = styled.div`
  display: flex;
  margin-right: 50px;
`;

const NewsBig = ({ match }) => (
  <NewsTemplate>
    <Wrapper>
      <Image>
        <LogoImage src={logo} />
      </Image>
      <Title>CENTRUM BEZPIECZENSTWA CYBERPRZESTRZENI</Title>
      <Description>
        Szanowni Panstwo, Narodowe Centrum Bezpieczenstwa Cyberprzestrzeni zaprasza na spotkanie, które bedzie dotyczylo
        sposobów wstapienia do armii oraz korzysci i mozliwosci rozwoju zwiazanych z pelnieniem sluzby w Wojskach Obrony
        Cyberprzestrzeni. Spotkanie zazwyczaj zajmuje okolo 80-90 minut. Zainteresowane osoby proszone sa o wyslanie
        e-maila do dziekanatu (dziekanat@wsiz.wroc.pl) z informacja o checi uczestnictwa
      </Description>
      <About>
        <AboutLeft>24 KWI 2027 00:00</AboutLeft>
        <AboutRight>od Bartek Mróz</AboutRight>
      </About>
    </Wrapper>
  </NewsTemplate>
);

export default NewsBig;

NewsBig.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
