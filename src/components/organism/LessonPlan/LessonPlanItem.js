import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffe68d;
  padding: 10px 20px;
  border-left: 5px solid #ffc700;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Link = styled.a`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  background-color: #ffc700;
  color: white;
  padding: 2px 10px;
`;

const LessonType = styled(Paragraph)`
  font-weight: 700;
  color: white;
`;

const LessonPlanItem = () => (
  <Wrapper>
    <Title>
      <LessonType>LAB</LessonType>
      <Paragraph>10:00-11:30</Paragraph>
    </Title>
    <Paragraph>Projektowanie i wdrażanie systemów informatycznych</Paragraph>
    <Bottom>
      <Paragraph>B Kowalski</Paragraph>
      <Link>przejdz</Link>
    </Bottom>
  </Wrapper>
);

export default LessonPlanItem;
