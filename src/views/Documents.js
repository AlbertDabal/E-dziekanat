import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashboardTemplate from 'templates/DashboardTemplate';
import { SetDocuments } from 'api/FetchDocuments';
import DocumentsItem from 'components/organism/DocumentsPage/DocumentsItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: 1px solid #cbcbcd;
  background-color: #ffffff;
`;
const Mininavi = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dfe0eb;
  font-size: 16px;
  justify-content: space-around;

  padding: 35px 0px 5px 0px;
  color: #9fa2b4;
`;
const Bar1 = styled.div`
  justify-content: center;
  width: 30%;
  display: flex;
`;
const Bar2 = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
`;

const Bar3 = styled.div`
  width: 10%;
  justify-content: center;
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
  console.log(dataDocuments);

  return (
    <DashboardTemplate>
      {dataDocuments !== null ? (
        <Wrapper>
          <Mininavi>
            <Bar1> Nazwa </Bar1>
            <Bar2> Data modyfikacji pliku </Bar2>
            <Bar2> Data wrzuceniu pliku </Bar2>
            <Bar2> Przesylajacy </Bar2>
            <Bar3> Pobierz </Bar3>
          </Mininavi>
          {dataDocuments.map((documents, index) => (
            <DocumentsItem
              Nazwa={documents.Nazwa_dokumentu}
              Datamody={documents.Data_modyfikacji_pliku}
              Dataupl={documents.Data_wrzuceniu_pliku}
              Przesylajacy={documents.Przesylajacy}
              Downloader={documents.Plik_path}
            />
          ))}
        </Wrapper>
      ) : null}
    </DashboardTemplate>
  );
};

export default Documents;
