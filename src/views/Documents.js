import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashboardTemplate from 'templates/DashboardTemplate';
import { SetDocuments } from 'api/FetchDocuments';
import DocumentsItem from 'components/organism/DocumentsPage/DocumentsItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  align-items: center;
  border: 1px solid #cbcbcd;
`;
const Mininavi = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #dfe0eb;
`;
const Bar1 = styled.div`
  display: flex;

  width: 35%;
`;
const Bar2 = styled.div`
  display: flex;
`;

const Bar3 = styled.div`
  display: flex;
  width: 1vh;
`;

const Documents = () => {
  const [dataDocuments, setDataDocuments] = useState(null);

  useEffect(() => {
    FetchDocuments();
  }, []);

  async function FetchDocuments() {
    const res = await SetDocuments();
    console.log(res.data.TopListDokumentow);
    setDataDocuments(res.data.TopListDokumentow);
  }

  return (
    <DashboardTemplate>
      {dataDocuments !== null ? (
        <Wrapper>
          <Mininavi>
            <Bar1> Nazwa </Bar1>
            <Bar2> Data_modyfikacji_pliku </Bar2>
            <Bar2> Data_wrzuceniu_pliku </Bar2>
            <Bar2> Przesylajacy </Bar2>
            <Bar3> abc </Bar3>
          </Mininavi>
          {dataDocuments.map((documents, index) => (
            <DocumentsItem
              Nazwa={documents.Nazwa_dokumentu}
              Datamody={documents.Data_modyfikacji_pliku}
              Dataupl={documents.Data_wrzuceniu_pliku}
              Przesylajacy={documents.Przesylajacy}
              Downloader={`${process.env.REACT_APP_ADDRESS}dokumenty/pobierz/${index}`}
            />
          ))}
        </Wrapper>
      ) : null}
    </DashboardTemplate>
  );
};

export default Documents;
