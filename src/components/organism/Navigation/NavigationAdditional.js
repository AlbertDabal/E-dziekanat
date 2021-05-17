import Button from 'components/atoms/Button/Button';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import NavigationAdditionalData from './NavigationAdditionalData';

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  padding: 4rem 0 1rem 0;
  border-top: 1px solid #457b9d;
`;

const ButtonStyled = styled(Button)`
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
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
    background-color: #24416b;
    border-left: 4px solid #ffffff;
    transition: all 0.3s;
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

const NavigationAdditional = () => {
  const history = useHistory();

  const Logout = () => {
    sessionStorage.clear();
    history.push('/');
  };
  return (
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
        <ButtonStyled type="button" typeButton="zaloguj" onClick={() => Logout()}>
          WYLOGUJ
        </ButtonStyled>
      </NavList>
    </NavWrapper>
  );
};
export default NavigationAdditional;
