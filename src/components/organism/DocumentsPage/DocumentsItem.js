import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { DownloadDocuments } from 'api/FetchDocuments';
import { formatDataTest } from 'function/FormatDatePl';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #dfe0eb;
  padding: 15px 0px 15px 0px;
`;

const NazwaDokumentu = styled.div`
  display: flex;
  width: 35%;
`;

const DataMod = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DataUp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Owner = styled.div`
  display: flex;
`;

const Download = styled.div`
  display: flex;
`;

const Przeniesienie = styled.a``;

const StyledParagraph = styled(Paragraph)`
  font-size: 14px;
  line-height: 17px;
`;

const DocumentsItem = ({ Nazwa, Datamody, Dataupl, Przesylajacy, Downloader }) => {
  const daty = formatDataTest(Datamody);
  const datyy = formatDataTest(Dataupl);

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
        <StyledParagraph>{`${daty[2]} ${daty[1]} ${daty[0]}`}</StyledParagraph>
        <StyledParagraph>{`${daty[3]}:${daty[4]}`}</StyledParagraph>
      </DataMod>
      <DataUp>
        <StyledParagraph>{`${datyy[2]} ${datyy[1]} ${datyy[0]}`}</StyledParagraph>
        <StyledParagraph>{`${datyy[3]}:${datyy[4]}`}</StyledParagraph>
      </DataUp>
      <Owner>
        <Paragraph>{Przesylajacy}</Paragraph>
      </Owner>
      <Download>
        <Przeniesienie onClick={() => DownloadItem()}>a</Przeniesienie>
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
