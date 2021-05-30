import React, { useState, useEffect } from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { SetPoolsDetails } from 'api/FetchPolls';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #cbcbcd;
  padding: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  margin-right: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const PoolDetails = ({ match }) => {
  const state = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    FetchDetails();
  }, []);

  async function FetchDetails() {
    const id = state.pathname.replace('/pools/', '');
    const res = await SetPoolsDetails(id);
    try {
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
    console.log(res.data);
  }

  return (
    <DashboardTemplate>
      {data !== null ? (
        <Container>
          <Heading>{data.Tresc}</Heading>

          <Paragraph>Twórca: Janusz Kowalski</Paragraph>

          {data.wybory.map((item) => (
            <Wrapper>
              <StyledInput type="radio" name="test" value="value2" />
              <Paragraph>{item.Tresc}</Paragraph>
            </Wrapper>
          ))}

          <StyledButton style={{ height: '50px' }}>WYSLIJ</StyledButton>
        </Container>
      ) : null}
    </DashboardTemplate>
  );
};

export default PoolDetails;

PoolDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
