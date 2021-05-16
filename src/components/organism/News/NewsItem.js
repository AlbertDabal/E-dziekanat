import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from 'images/backgroud.jpg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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
  width: 15%;
  border-right: 1px solid;
  font-size: 18px;
  flex-direction: column;
  padding-top: 30px;
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
  font-size: 28px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: 1.25373px;
`;

const Description = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  display: flex;
  width: 100%;
  border-radius: 18px 18px 0px 0px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 20px;
  line-height: 27px;
`;

const NewsItem = ({ data, tytul, tekst }) => {
  const year = data.substring(0, 4);
  const month = data.substring(6, 7);
  const day = data.substring(8, 10);

  const monthNames = ['zero', 'STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];

  const monthName = monthNames[month];
  console.log(month);
  return (
    <Wrapper onClick={() => console.log('Clicked')}>
      <Image>
        <LogoImage src={logo} />
      </Image>
      <Bottom>
        <Date>
          <StyledParagraph>{`${day} ${monthName}`}</StyledParagraph>
          <StyledParagraph>{year}</StyledParagraph>
        </Date>
        <Content>
          <Title>{tytul}</Title>
          <Description>{tekst.length > 250 ? `${tekst.substring(0, 250)}...` : tekst}</Description>
        </Content>
      </Bottom>
    </Wrapper>
  );
};

NewsItem.propTypes = {
  data: PropTypes.string.isRequired,
  tytul: PropTypes.string.isRequired,
  tekst: PropTypes.string.isRequired,
  // logo: PropTypes.string.isRequired,
};

export default NewsItem;
