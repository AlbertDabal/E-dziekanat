import React from 'react';
import styled from 'styled-components';
import DashboardTemplate from 'templates/DashboardTemplate';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 86vh;
  text-decoration: none;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TD = styled.td`
  border: 0.83779px solid #dfe0eb;
  padding: 8px;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  white-space: pre;
`;

const TH = styled.th`
  text-align: center;
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #9fa2b4;
  width: 15%;
  &:first-child {
    width: 45%;
  }
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #fefefe;
  }
`;

const DATA = styled.p`
  padding: 3px;
  display: block;
`;

const Documents = () => (
  <DashboardTemplate>
    <Wrapper>
      <Table>
        <TR>
          <TH>Nazwa</TH>
          <TH>Ostatnia modyfikacja</TH>
          <TH>Data przesłania</TH>
          <TH>Przesylajacy</TH>
        </TR>
        <TR>
          <TD>Dokument_1.txt</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2021-05-16</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Bartek Mróz</TD>
        </TR>
        <TR>
          <TD>Dokument_1.txt</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2021-05-16</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Bartek Mróz</TD>
        </TR>
        <TR>
          <TD>Dokument_1.txt</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2021-05-16</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Bartek Mróz</TD>
        </TR>
        <TR>
          <TD>Dokument_1.txt</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2021-05-16</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Bartek Mróz</TD>
        </TR>
        <TR>
          <TD>Dokument_1.txt</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2021-05-16</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Bartek Mróz</TD>
        </TR>
        <TR>
          <TD>Dokument_1.txt</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2021-05-16</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Bartek Mróz</TD>
        </TR>
      </Table>
    </Wrapper>
  </DashboardTemplate>
);

export default Documents;
