import React, { useState, useEffect } from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import PropTypes from 'prop-types';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { PoolsSubmit, SetPoolsDetails } from 'api/FetchPolls';
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

const LinkStyled = styled(Paragraph)`
  margin-top: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const PoolDetails = ({ match }) => {
  const state = useLocation();
  const [data, setData] = useState(null);
  const [choose, setChoose] = useState(null);
  const [errorSubmit, setErrorSubmit] = useState(null);
  const history = useHistory();

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
  }

  async function Wyslij(e) {
    e.preventDefault();
    const id = state.pathname.replace('/pools/', '');
    const res = await PoolsSubmit(id, choose);
    if (res.data !== true) {
      setErrorSubmit('*Nie udało się odpowiedziec w ankiecie');
    } else {
      history.push('/pools');
    }
  }

  return (
    <DashboardTemplate>
      {data !== null ? (
        <Container>
          <form onSubmit={Wyslij}>
            <Heading>{data.Tresc}</Heading>

            <Paragraph>Twórca: Janusz Kowalski</Paragraph>

            {data.wybory.map((item) => (
              <Wrapper>
                <StyledInput
                  type="radio"
                  name="test"
                  value={item.IdWyboru}
                  onChange={(e) => setChoose(e.target.value)}
                />
                <Paragraph>{item.Tresc}</Paragraph>
              </Wrapper>
            ))}

            {errorSubmit && (
              <>
                <LinkStyled style={{ color: 'red' }}>{errorSubmit}</LinkStyled>
                <br />
              </>
            )}
            <br />
            <StyledButton type="submit" style={{ height: '50px' }}>
              WYSLIJ
            </StyledButton>
          </form>
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
