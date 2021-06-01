import Alert from 'components/atoms/Alert/Alert';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #cbcbcd;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  height: 70px;
  width: 230px;
  border-radius: 30px;
  color: white;
  background-color: ${({ theme }) => theme.alertColorSucces};
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  border: 2px solid transparent;
  outline: none;
  text-decoration: none;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Pooltems = ({ tresc, data, autor, key, wybory, id }) => (
  <Wrapper>
    <Paragraph style={{ width: '10%' }}>{data.substr(0, 10)}</Paragraph>
    <Paragraph style={{ width: '32%' }}>{tresc}</Paragraph>
    <Paragraph style={{ width: '22%' }}>{autor}</Paragraph>
    {wybory === null ? (
      <StyledLink to={`/pools/${id}`} style={{ width: '10%' }}>
        WYPEŁNIJ
      </StyledLink>
    ) : (
      <StyledLink to={`/pools/${id}`} style={{ width: '10%' }}>
        PODGLĄD
      </StyledLink>
    )}
  </Wrapper>
);

Pooltems.propTypes = {
  tresc: PropTypes.element.isRequired,
  data: PropTypes.element.isRequired,
  autor: PropTypes.element.isRequired,
  key: PropTypes.element.isRequired,
  wybory: PropTypes.element.isRequired,
  id: PropTypes.element.isRequired,
};

export default Pooltems;