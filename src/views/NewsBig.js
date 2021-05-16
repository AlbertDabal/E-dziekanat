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
  margin: 10px;
  font-size: 38px;
  line-height: 38px;
  margin-top: 25px;
`;

const Description = styled.div`
  display: flex;
  height: 50%;
  font-size: 22px;
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
      <Title>tytul_6</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      </Description>
      <About>
        <AboutLeft>24 KWI 2027 00:00</AboutLeft>
        <AboutRight>od Bartek MrÃ³z</AboutRight>
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
