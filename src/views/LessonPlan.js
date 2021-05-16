import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';
import React, { useEffect, useState } from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import SelectPlan from 'components/molecules/SelectPlan/SelectPlan';
import styled from 'styled-components';
import { SetActualyPlan, SetPlan } from 'api/FetchPlan';
import Heading from 'components/atoms/Heading/Heading';
import { nanoid } from 'nanoid';

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
  const [date, setDate] = useState(null);

  useEffect(() => {
    FetchPlanCurrent();
  }, []);

  async function FetchPlan(kodPlanu, idPola) {
    try {
      const res = await SetPlan(kodPlanu, idPola, date);
      setDataPlan(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function FetchPlanCurrent() {
    const res = await SetActualyPlan();
    try {
      setDataPlan(res.data);
      setDate({ DataOd: res.data.DataOd, DataDo: res.data.DataDo });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <DashboardTemplate>
      <Wrapper>
        <SelectPlan TypePlan={FetchPlan} />
        {dataPlan !== null && date !== null ? (
          <WrapperPlan>
            {dataPlan.Tydzien.map((item) => (
              <LessonPlanList dataPlanLesson={item} key={nanoid()} />
            ))}
          </WrapperPlan>
        ) : (
          <Heading>Ładowanie planu...</Heading>
        )}
      </Wrapper>
    </DashboardTemplate>
  );
};

export default LesssonPlan;
