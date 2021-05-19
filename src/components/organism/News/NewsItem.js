import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from 'images/backgroud.jpg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  height: 100%;
  border-radius: 18px;
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
`;

const Datee = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 15%;
  border-right: 1px solid;
  font-size: 18px;
  justify-content: center;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 5px;
  height: 100%;
`;

const Title = styled.div`
  font-size: 26px;
  line-height: 36px;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  font-family: Poppins;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: url('${logo}') no-repeat right top;
  background-size: cover;
  border-radius: 18px 18px 0px 0px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 20px;
  line-height: 27px;
`;

function formatDate(data) {
  const dob = new Date(data);

  const monthNames = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];

  const day = dob.getDate();
  const monthIndex = dob.getMonth();
  const year = dob.getFullYear();
  return [year, monthNames[monthIndex], day];
}

const NewsItem = ({ data, tytul, tekst }) => {
  console.log(formatDate(data));
  const daty = formatDate(data);
  const year = daty[0];
  const monthName = daty[1];
  const day = daty[2];

  return (
    <Wrapper onClick={() => console.log('Clicked')}>
      <LogoImage src={logo} />
      <Bottom>
        <Datee>
          <StyledParagraph>{`${day} ${monthName}`}</StyledParagraph>
          <StyledParagraph>{year}</StyledParagraph>
        </Datee>
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
