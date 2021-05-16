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
  font-size: 32px;
  line-height: 36px;
`;

const Description = styled.div`
  display: flex;
  height: 50%;
  font-size: 14px;
  line-height: 18px;
  margin: 10px;
`;

const About = styled.div`
  display: flex;
  margin: 10px;
  width: 100%;
  justify-content: space-between;
`;
const AboutLeft = styled.div`
  display: flex;
  margin-left: 10px;
`;
const AboutRight = styled.div`
  display: flex;
  margin-right: 10px;
`;

const NewsBig = ({ match }) => (
  <NewsTemplate>
    <Wrapper>
      <Image>
        <LogoImage src={logo} />
      </Image>
      <Title>Tytuł newsa</Title>
      <Description>Opis</Description>
      <About>
        <AboutLeft>{match.params.id}</AboutLeft>
        <AboutRight>Autor</AboutRight>
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
