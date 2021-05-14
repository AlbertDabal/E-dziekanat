import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DashboardTemplate from 'templates/DashboardTemplate';

import NewsData from 'data/NewsData';
import NewsItem from 'components/organism/News/NewsItem';

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

const News = () => (
  <DashboardTemplate>
    <Wrapper>
      {NewsData.map((news, index) => (
        <ButtonNews to={`/news/${index}`}>
          <NewsItem data={news.data} tytul={news.tytul} tekst={news.tekst} />
        </ButtonNews>
      ))}
    </Wrapper>
  </DashboardTemplate>
);

export default News;
