import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavigationAdditionalData from './NavigationAdditionalData';

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  padding: 4rem 0;
  border-top: 1px solid #457B9D;
`;

const NavList = styled.ul`
  width: 100%;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 1.6rem;
  text-align: left;
  outline: none;
  text-decoration: none;

  :hover {
    background-color: #24416B;
    border-left: 4px solid #ffffff;
    transition: all .3s;
  }
`;

const NavItemLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 11px 20px;

  > svg {
    font-size: 18px;
    padding-bottom: 2px;
    margin: 0 20px;
  }

  > span {
    font-weight: 100;
  }
`;

const NavigationAdditional = () => (
  <NavWrapper>
    <NavList>
      {NavigationAdditionalData.map((item) => (
        <NavItem key={item.id} className={item.cName}>
          <NavItemLink to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </NavItemLink>
        </NavItem>
      ))}
    </NavList>
  </NavWrapper>
);

export default NavigationAdditional;
