import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import NotificationsItem from './NotificationsItem';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin: 20px 45px 60px 37px;
`;

const Notifications = ({ dataNotifications }) => (
  <Wrapper>
    <StyledHeading big>Powiadomienia</StyledHeading>
    {dataNotifications ? (
      dataNotifications.map((item) => <NotificationsItem tresc={item.Tresc} />)
    ) : (
      <StyledHeading>Nie posiadasz zadnych powiadomnień</StyledHeading>
    )}
  </Wrapper>
);

export default Notifications;

Notifications.propTypes = {
  dataNotifications: PropTypes.element.isRequired,
};
