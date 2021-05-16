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
            <DATA>16:31</DATA>
          </TD>
          <TD>
            <DATA>2021-05-11</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Diego Lewandowski</TD>
        </TR>
        <TR>
          <TD>Dokument_2.txt</TD>
          <TD>
            <DATA>2021-05-14</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2021-05-10</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Artur Wiśniewski</TD>
        </TR>
        <TR>
          <TD>Advantages and disadvantages of studying IT.txt</TD>
          <TD>
            <DATA>2021-05-13</DATA>
            <DATA>09:59</DATA>
          </TD>
          <TD>
            <DATA>2021-05-09</DATA>
            <DATA>11:11</DATA>
          </TD>
          <TD>Miłosz Jankowski</TD>
        </TR>
        <TR>
          <TD>Zadanie zaliczeniowe PO_2DI.doc</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>12:32</DATA>
          </TD>
          <TD>
            <DATA>2020-09-16</DATA>
            <DATA>11:55</DATA>
          </TD>
          <TD>Marlena Ziółkowska</TD>
        </TR>
        <TR>
          <TD>Wazne informacje 2DI.doc</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>12:45</DATA>
          </TD>
          <TD>
            <DATA>2020-09-23</DATA>
            <DATA>18:29</DATA>
          </TD>
          <TD>Agnieszka Urbańska</TD>
        </TR>
        <TR>
          <TD>Karta zgłoszenia tematu inż. studia Stacjonarne.docx</TD>
          <TD>
            <DATA>2021-05-15</DATA>
            <DATA>18:19</DATA>
          </TD>
          <TD>
            <DATA>2020-08-23</DATA>
            <DATA>21:23</DATA>
          </TD>
          <TD>Adam Ostrowski</TD>
        </TR>
      </Table>
    </Wrapper>
  </DashboardTemplate>
);

export default Documents;
