import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { DownloadDocuments } from 'api/FetchDocuments';
import { formatDataTest } from 'function/FormatDatePl';
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

  a > svg {
    font-size: 26px;
    padding-bottom: 2px;
    margin: 0 20px;
    cursor: pointer;
  }

  a > span {
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

const DocumentsItem = ({ Nazwa, Datamody, Dataupl, Przesylajacy, Downloader }) => {
  const daty = formatDataTest(Datamody);
  const datyy = formatDataTest(Dataupl);

  async function DownloadItem() {
    const res = await DownloadDocuments();
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
        <a href={Downloader}>
          <AiOutlineDownload onClick={() => DownloadItem()} />
        </a>
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
