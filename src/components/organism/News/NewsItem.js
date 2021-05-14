import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import logo from 'images/backgroud.jpg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 730px;
  height: 389.5px;
  border-radius: 18px;
  margin: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
  font-size: 12px;
  line-height: 18px;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 20%;
  border-right: 1px solid;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 1.25373px;
`;

const Image = styled.div`
  display: flex;
  width: 100%;
  height: 65%;
  background: black;
  border-radius: 18px 18px 0px 0px;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 5px;
  height: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: 1.25373px;
`;

const LogoImage = styled.img`
  display: flex;
  width: 100%;
  border-radius: 18px 18px 0px 0px;
`;

const NewsItem = ({ data, tytul, tekst }) => (
  <Wrapper onClick={() => console.log('Clicked')}>
    <Image>
      <LogoImage src={logo} />
    </Image>
    <Bottom>
      <Date>{data}</Date>
      <Content>
        <Title>{tytul}</Title>
        {tekst}
      </Content>
    </Bottom>
  </Wrapper>
);

NewsItem.propTypes = {
  data: PropTypes.string.isRequired,
  tytul: PropTypes.string.isRequired,
  tekst: PropTypes.string.isRequired,
};

export default NewsItem;
