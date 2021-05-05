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

  useEffect(() => {
    FetchPlanCurrent();
  }, []);

  async function FetchPlan(kodPlanu, idPola) {
    const res = await SetPlan(kodPlanu, idPola);

    if (res) {
      setDataPlan(res.data);
    }
  }

  async function FetchPlanCurrent() {
    const res = await SetActualyPlan();
    setDataPlan(res.data);
  }

  if (dataPlan !== null) {
    return (
      <DashboardTemplate>
        <Wrapper>
          <SelectPlan TypePlan={FetchPlan} />
          <WrapperPlan>
            {dataPlan.Tydzien.map((item, index) => (
              <LessonPlanList dataPlanLesson={item} key={nanoid()} />
            ))}
          </WrapperPlan>
        </Wrapper>
      </DashboardTemplate>
    );
  }
  return (
    <DashboardTemplate>
      <Wrapper>
        <Heading>Ładowanie planu...</Heading>
      </Wrapper>
    </DashboardTemplate>
  );
};

export default LesssonPlan;
