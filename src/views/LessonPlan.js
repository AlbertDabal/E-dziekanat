import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DashboardTemplate from 'templates/DashboardTemplate';
import { LessonPlan } from 'data/LessonPlan';

const LesssonPlan = () => {
  const [dataPlan, setDataPlan] = useState(null);

  useEffect(() => {
    FetchPlan();
  }, []);

  async function FetchPlan() {
    const res = await axios
      .post('http://178.43.155.21/api/plan/aktualny_plan', {
        Id_uzytkownika: 2,
        Kod_roli: 'student',
      })
      .catch((error) => {
        console.log(error);
      });
    setDataPlan(res.data);
  }
  if (dataPlan !== null) {
    console.log(dataPlan.Tydzien[0]);
    return (
      <DashboardTemplate>
        {dataPlan.Tydzien.map((item) => (
          <LessonPlanList dataPlanLesson={item} />
        ))}
      </DashboardTemplate>
    );
  }
  return null;
};

export default LesssonPlan;
