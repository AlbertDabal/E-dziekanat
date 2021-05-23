import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { DownloadDocuments } from 'api/FetchDocuments';
import { AiOutlineDownload } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #dfe0eb;
  padding: 15px 0px;
`;

const NazwaDokumentu = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
`;

const DataMod = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DataUp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

const Owner = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const Download = styled.div`
  width: 10%;
  align-items: center;

  > svg {
    font-size: 26px;
    padding-bottom: 2px;
    margin: 0 20px;
    cursor: pointer;
  }

  > span {
    font-weight: 100;
  }
`;

const Przeniesienie = styled.a`
  width: 100%;
  background-color: red;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 14px;
  line-height: 17px;
`;

function formatDatamody(Datamody) {
  const dob = new Date(Datamody);

  const monthNames = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];

  const day = dob.getDate();
  const monthIndex = dob.getMonth();
  const year = dob.getFullYear();
  const hour = dob.getHours();
  const minutes = dob.getMinutes();
  return [year, monthNames[monthIndex], day, hour, minutes];
}

function formatDataupl(Dataupl) {
  const dob = new Date(Dataupl);

  const monthNames = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];

  const day = dob.getDate();
  const monthIndex = dob.getMonth();
  const year = dob.getFullYear();
  const hour = dob.getHours();
  const minutes = dob.getMinutes();
  return [year, monthNames[monthIndex], day, hour, minutes];
}

const DocumentsItem = ({ Nazwa, Datamody, Dataupl, Przesylajacy, Downloader }) => {
  console.log(formatDatamody);
  const daty = formatDatamody(Datamody);
  const year = daty[0];
  const monthName = daty[1];
  const day = daty[2];
  const hour = daty[3];
  const minutes = daty[4];

  const datyy = formatDataupl(Dataupl);
  const yearr = datyy[0];
  const monthNamee = datyy[1];
  const dayy = datyy[2];
  const hourr = datyy[3];
  const minutess = datyy[4];

  async function DownloadItem() {
    const res = await DownloadDocuments();
    console.log(res);
  }

  return (
    <Wrapper onClick={() => console.log('Clicked')}>
      <NazwaDokumentu>
        <Paragraph>{Nazwa}</Paragraph>
      </NazwaDokumentu>
      <DataMod>
        <StyledParagraph>{`${day} ${monthName} ${year}`}</StyledParagraph>
        <StyledParagraph>{`${hour}:${minutes}`}</StyledParagraph>
      </DataMod>
      <DataUp>
        <StyledParagraph>{`${dayy} ${monthNamee} ${yearr}`}</StyledParagraph>
        <StyledParagraph>{`${hourr}:${minutess}`}</StyledParagraph>
      </DataUp>
      <Owner>
        <Paragraph>{Przesylajacy}</Paragraph>
      </Owner>
      <Download>
        <AiOutlineDownload onClick={() => DownloadItem} />
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
