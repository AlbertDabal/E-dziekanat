import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SetNews } from 'api/FetchNews';
import NewsItem from 'components/organism/News/NewsItem';
import DashboardTemplate from 'templates/DashboardTemplate';

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 50% 50%;
  text-decoration: none;
`;

const ButtonNews = styled(Link)`
  text-decoration: none;
  color: black;
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
  if (dataNews !== null) {
    return (
      <DashboardTemplate>
        <Wrapper>
          {dataNews.map((news, index) => (
            <ButtonNews to={`/news/${index}`}>
              <NewsItem data={news.Data_wystawienia} tytul={news.Tytul} tekst={news.Tresc} logo={news.Zdjecie} />
            </ButtonNews>
          ))}
        </Wrapper>
      </DashboardTemplate>
    );
  }
  return null;
};

export default News;
