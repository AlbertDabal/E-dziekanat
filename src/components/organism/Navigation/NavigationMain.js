import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1.6rem;
`;
const NavItem = styled.li`
 font-size: 1.6rem;
 text-align: left;
 outline: none;
text-decoration: none;
`;

const NavigationMain = () => (
  <Router>
    <NavWrapper>
      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <NavItem>
            <Link to="/dashboard">Kokpit</Link>
          </NavItem>
          <NavItem>
            <Link to="/deans">Dziekanat</Link>
          </NavItem>
          <NavItem>
            <Link to="/marks">Oceny</Link>
          </NavItem>
          <NavItem>
            <Link to="/payment">Płatności</Link>
          </NavItem>
          <NavItem>
            <Link to="/plan">Plan</Link>
          </NavItem>
          <NavItem>
            <Link to="/news">Aktualności</Link>
          </NavItem>
          <NavItem>
            <Link to="/documents">Dokumenty</Link>
          </NavItem>
        </ul>
      </div>
    </NavWrapper>
  </Router>
);

export default NavigationMain;
