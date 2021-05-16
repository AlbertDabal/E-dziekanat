import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import styled from 'styled-components';
import NavigationMainData from 'data/NavigationMainData';
import { useLocation } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
`;

const SvgContainer = styled.div`
  color: black;

  > svg {
    font-size: 36px;
    padding-bottom: 2px;
    margin: 0 20px;
  }
`;

const HeadingStyled = styled(Heading)`
  font-weight: 500;
`;

const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperRight = styled.div`
  display: flex;
  align-items: center;

  > :first-child {
    padding: 5px 20px;
    box-sizing: content-box;
    border-right: 1px solid black;
    margin-right: 2rem;
  }

  > svg {
    font-size: 24px;

    :last-child {
      font-size: 36px;
      color: grey;
      margin: 0 2rem;
    }
  }
`;

const TopBar = ({ news }) => {
  const isLogged = useSelector((state) => state);
  const location = useLocation().pathname;
  const pathName = NavigationMainData.filter((item, index) => item.path === location);

  const test = sessionStorage.getItem('ImieNazwisko');
  return (
    <Wrapper>
      {console.log(test)}
      <WrapperLeft>
        <SvgContainer>{news ? NavigationMainData[5].icon : pathName[0].icon}</SvgContainer>

        <HeadingStyled big>{news ? NavigationMainData[5].title : pathName[0].title}</HeadingStyled>
      </WrapperLeft>
      <WrapperRight>
        <AiIcons.AiFillMessage />
        <Heading>{sessionStorage.getItem('ImieNazwisko')}</Heading>
        <FaIcons.FaUserCircle />
      </WrapperRight>
    </Wrapper>
  );
};

TopBar.propTypes = {
  news: PropTypes.element.isRequired,
};

export default TopBar;
