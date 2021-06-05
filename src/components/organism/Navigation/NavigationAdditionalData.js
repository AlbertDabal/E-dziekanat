import React from 'react';
import * as CgIcons from 'react-icons/cg';
import * as GoIcons from 'react-icons/go';
import { routes } from 'routes';
import { nanoid } from 'nanoid';

const NavigationAdditionalData = [
  {
    title: 'Motyw',
    path: routes.dashboard,
    icon: <CgIcons.CgDarkMode />,
    cName: 'nav-text,',
    id: nanoid(),
  },
  {
    title: 'Ustawienia',
    path: routes.settings,
    icon: <GoIcons.GoGear />,
    cName: 'nav-text,',
    id: nanoid(),
  },
];

export default NavigationAdditionalData;
