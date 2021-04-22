import React from 'react';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import { routes } from 'routes';
import { nanoid } from 'nanoid';

const NavigationMainData = [
  {
    title: 'Kokpit',
    path: routes.dashboard,
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text,',
    id: nanoid(),
  },
  {
    title: 'Plan',
    path: routes.lessonPlan,
    icon: <AiIcons.AiTwotoneCalendar />,
    cName: 'nav-text,',
    id: nanoid(),
  },
  {
    title: 'Dziekanat',
    path: routes.lessonPlan,
    icon: <FaIcons.FaGraduationCap />,
    cName: 'nav-text,',
    id: nanoid(),
  },
  {
    title: 'Oceny',
    path: routes.lessonPlan,
    icon: <HiIcons.HiChartSquareBar />,
    cName: 'nav-text,',
    id: nanoid(),
  },
  {
    title: 'Płatności',
    path: routes.lessonPlan,
    icon: <FaIcons.FaWallet />,
    cName: 'nav-text,',
    id: nanoid(),
  },
  {
    title: 'Aktualności',
    path: routes.lessonPlan,
    icon: <AiIcons.AiFillThunderbolt />,
    cName: 'nav-text,',
    id: nanoid(),
  },
  {
    title: 'Dokumenty',
    path: routes.lessonPlan,
    icon: <AiIcons.AiFillFile />,
    cName: 'nav-text,',
    id: nanoid(),
  },
];

export default NavigationMainData;
