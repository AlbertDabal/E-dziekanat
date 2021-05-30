import React, { useEffect, useState } from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import { SetPools } from 'api/FetchPolls';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Pooltems from 'components/organism/Pool/Pooltems';
import PropTypes from 'prop-types';

const WrapperTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #cbcbcd;
  padding: 15px;
`;

const Polls = () => {
  const [dataPolls, SetDataPolls] = useState(null);
  useEffect(() => {
    FetchPolls();
  }, []);

  async function FetchPolls() {
    const res = await SetPools();
    try {
      SetDataPolls(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <DashboardTemplate>
      <Container>
        <WrapperTop>
          <Paragraph style={{ width: '10%' }}>Data utworzenia</Paragraph>
          <Paragraph style={{ width: '32%' }}>Tresc</Paragraph>
          <Paragraph style={{ width: '22%' }}>Autor</Paragraph>
          <Paragraph style={{ width: '10%' }} />
        </WrapperTop>

        {dataPolls !== null ? (
          <Wrapper>
            {dataPolls.map((item) => (
              <Pooltems
                tresc={item.Tresc}
                data={item.DataUtworzenia}
                autor={item.ImieNazwisko}
                key={item.IdAnkiety}
                id={item.IdAnkiety}
                wybory={item.wybory}
              />
            ))}
          </Wrapper>
        ) : null}
      </Container>
    </DashboardTemplate>
  );
};

export default Polls;
