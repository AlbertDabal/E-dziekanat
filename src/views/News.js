import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SetNews } from 'api/FetchNews';
import NewsItem from 'components/organism/News/NewsItem';
import DashboardTemplate from 'templates/DashboardTemplate';
import NewsBig from './NewsBig';

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 50% 50%;
`;

const ButtonNews = styled.a`
  text-decoration: none;
  color: black;
  margin: 10px;
`;

const News = () => {
  const [dataNews, setDataNews] = useState(null);

  useEffect(() => {
    FetchNews();
  }, []);

  async function FetchNews() {
    const res = await SetNews();
    console.log(res.data.TopListAktualnosciPowiadomien);
    setDataNews(res.data.TopListAktualnosciPowiadomien);
  }

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const IsOpen = (index) => {
    setOpen(!open);
    setId(index);
  };

  return (
    <DashboardTemplate>
      {dataNews !== null ? (
        <Wrapper>
          {open && <NewsBig IsOpen={IsOpen} data={dataNews[id]} />}
          {dataNews.map((news, index) => (
            <ButtonNews onClick={() => IsOpen(index)}>
              <NewsItem data={news.Data_wystawienia} tytul={news.Tytul} tekst={news.Tresc} />
            </ButtonNews>
          ))}
        </Wrapper>
      ) : null}
    </DashboardTemplate>
  );
};

export default News;
