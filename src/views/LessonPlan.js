import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardTemplate from 'templates/DashboardTemplate';
import SelectPlan from 'components/molecules/SelectPlan/SelectPlan';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const WrapperPlan = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const LesssonPlan = () => {
  const [dataPlan, setDataPlan] = useState(null);

  useEffect(() => {
    FetchPlanCurrent();
  }, []);

  async function FetchPlan(kodPlanu, idPola) {
    const res = await axios
      .post('http://178.43.155.21/api/plan/zwroc_plan', {
        Id_uzytkownika: 2,
        Kod_roli: 'student',
        KodPlanu: kodPlanu,
        IdPola: idPola,
        DataOd: '2021-04-26',
        DataDO: '2021-04-30',
      })
      .catch((error) => {
        console.log(error);
      });

    if (res) {
      setDataPlan(res.data);
    }
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

  if (dataPlan !== null) {
    return (
      <DashboardTemplate>
        <Wrapper>
          <SelectPlan TypePlan={FetchPlan} />
          <WrapperPlan>
            {dataPlan.Tydzien.map((item) => (
              <LessonPlanList dataPlanLesson={item} />
            ))}
          </WrapperPlan>
        </Wrapper>
      </DashboardTemplate>
    );
  }
  return null;
};

export default LesssonPlan;
