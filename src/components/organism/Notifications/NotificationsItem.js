import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Alert from 'components/atoms/Alert/Alert';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #cbcbcd;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Dot = styled.span`
  display: flex;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid #c5c7cd;
`;

const NotificationsItem = ({ tresc }) => (
  <Wrapper>
    <Dot />
    <Paragraph>{tresc}</Paragraph>
    <Alert>NEW</Alert>
  </Wrapper>
);

export default NotificationsItem;
NotificationsItem.propTypes = {
  tresc: PropTypes.element.isRequired,
};
