import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #dfe0eb;
`;

const NazwaDokumentu = styled.div`
  display: flex;
  width: 35%;
`;

const DataMod = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const DataUp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Owner = styled.div`
  display: flex;
`;

const Download = styled.div`
  display: flex;
  width: 1vh;
`;

const Przeniesienie = styled.a``;

const StyledParagraph = styled(Paragraph)``;

function formatDatamody(Datamody) {
  const dob = new Date(Datamody);

  const monthNames = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];

  const day = dob.getDate();
  const monthIndex = dob.getMonth();
  const year = dob.getFullYear();
  return [year, monthNames[monthIndex], day];
}

function formatDataupl(Dataupl) {
  const dob = new Date(Dataupl);

  const monthNames = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];

  const day = dob.getDate();
  const monthIndex = dob.getMonth();
  const year = dob.getFullYear();
  return [year, monthNames[monthIndex], day];
}

const DocumentsItem = ({ Nazwa, Datamody, Dataupl, Przesylajacy, Downloader }) => {
  console.log(formatDatamody);
  const daty = formatDatamody(Datamody);
  const year = daty[0];
  const monthName = daty[1];
  const day = daty[2];

  const datyy = formatDataupl(Dataupl);
  const yearr = datyy[0];
  const monthNamee = datyy[1];
  const dayy = datyy[2];

  return (
    <Wrapper onClick={() => console.log('Clicked')}>
      <NazwaDokumentu>{Nazwa}</NazwaDokumentu>
      <DataMod>
        <StyledParagraph>{`${day} ${monthName} ${year}`}</StyledParagraph>
        <StyledParagraph>{`${day} ${monthName} ${year}`}</StyledParagraph>
      </DataMod>
      <DataUp>
        <StyledParagraph>{`${dayy} ${monthNamee} ${yearr}`}</StyledParagraph>
        <StyledParagraph>{`${dayy} ${monthNamee} ${yearr}`}</StyledParagraph>
      </DataUp>
      <Owner>{Przesylajacy}</Owner>
      <Download>
        <Przeniesienie href={Downloader}>a</Przeniesienie>
      </Download>
    </Wrapper>
  );
};

DocumentsItem.propTypes = {
  Nazwa: PropTypes.string.isRequired,
  Datamody: PropTypes.string.isRequired,
  Dataupl: PropTypes.string.isRequired,
  Przesylajacy: PropTypes.string.isRequired,
  Downloader: PropTypes.string.isRequired,
};

export default DocumentsItem;
