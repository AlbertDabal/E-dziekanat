import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';
import React from 'react';

import DashboardTemplate from 'templates/DashboardTemplate';
import { LessonPlan } from 'data/LessonPlan';

const LesssonPlan = () => {
  console.log(LessonPlan[0].Tydzien);
  return (
    <DashboardTemplate>
      {LessonPlan[0].Tydzien.map((item) => (
        <LessonPlanList dataPlanLesson={item} />
      ))}
    </DashboardTemplate>
  );
};

export default LesssonPlan;
