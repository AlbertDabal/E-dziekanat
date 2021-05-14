import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import backgroud from 'images/backgroud.jpg';
import logo from 'images/EdziekanatLogo.png';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.thameColor};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.div`
  width: 80%;
  background-color: white;
  height: 90vh;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ImageLeft = styled.div`
  background: url('${backgroud}') no-repeat;
  background-size: cover;
  width: 50%;
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.primaryButtonColorOpacity};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoImage = styled.img`
  width: 60%;
  margin-bottom: 20%;
`;

const WellcomeTemplate = ({ children }) => (
  <Wrapper>
    <Main>
      <ImageLeft>
        <Logo>
          <LogoImage src={logo} />
        </Logo>
      </ImageLeft>
      {children}
    </Main>
  </Wrapper>
);

WellcomeTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WellcomeTemplate;
