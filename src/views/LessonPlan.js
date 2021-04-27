import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DashboardTemplate from 'templates/DashboardTemplate';
import { LessonPlan } from 'data/LessonPlan';
import SelectPlan from 'components/molecules/SelectPlan/SelectPlan';

const LesssonPlan = () => {
  const [dataPlan, setDataPlan] = useState(null);
  const [codePlan, setCodePlan] = useState(null);
  const [idField, setIdField] = useState(null);

  useEffect(() => {
    FetchPlanCurrent();
  }, []);

  async function FetchPlan() {
    const res = await axios
      .post('http://178.43.155.21/api/plan/zwroc_plan', {
        Id_uzytkownika: 2,
        Kod_roli: 'student',
        KodPlanu: codePlan,
        IdPola: idField,
        DataOd: '2021-04-26',
        DataDO: '2021-04-30',
      })
      .catch((error) => {
        console.log(error);
      });

    setDataPlan(res.data);
  }

  async function FetchPlanCurrent() {
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

  const SelectTypePlan = (kodPlanu, idPola) => {
    console.log(kodPlanu);
    if (kodPlanu !== 'wykładowca') {
      if (idPola) {
        setCodePlan(kodPlanu);
        setIdField(idPola);
        FetchPlan();
      }
    }
  };

  if (dataPlan !== null) {
    // console.log(dataPlan.Tydzien[0]);
    return (
      <DashboardTemplate>
        <SelectPlan TypePlan={SelectTypePlan} />
        {dataPlan.Tydzien.map((item) => (
          <LessonPlanList dataPlanLesson={item} />
        ))}
      </DashboardTemplate>
    );
  }
  return null;
};

export default LesssonPlan;
