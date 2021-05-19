import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';
import React, { useEffect, useState } from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import SelectPlan from 'components/molecules/SelectPlan/SelectPlan';
import styled from 'styled-components';
import { SetActualyPlan, SetPlan, SetSelectDefault, SetSelect } from 'api/FetchPlan';
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
  const [dataSelect, setDataSelect] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    FetchPlanCurrent();
  }, []);

  async function FetchSelectDefult() {
    const res = await SetSelectDefault();
    try {
      setItemSelected(res.data.IdDomyslne);
      setDataSelect(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function FetchSelect(role) {
    const res = await SetSelect(role);
    try {
      setItemSelected(0);
      setDataSelect(res.data);
      FetchPlan(role, 1);
    } catch (err) {
      console.log(err);
    }
  }

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
      setDate({ DataOd: res.data.DataOd.substr(0, 10), DataDo: res.data.DataDo.substr(0, 10) });
    } catch (err) {
      console.log(err);
    }

    FetchSelectDefult();
  }

  const SetItem = (item) => {
    setItemSelected(item);
  };

  async function NextDay(kodPlanu) {
    const data = { DataOd: CountNextWeek(date.DataOd, true), DataDo: CountNextWeek(date.DataDo, true) };
    try {
      const res = await SetPlan(kodPlanu, itemSelected, data);
      setDataPlan(res.data);
      setDate(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function PrevDay(kodPlanu) {
    const data = { DataOd: CountNextWeek(date.DataOd, false), DataDo: CountNextWeek(date.DataDo, false) };
    try {
      const res = await SetPlan(kodPlanu, itemSelected, data);
      setDataPlan(res.data);
      setDate(data);
    } catch (err) {
      console.log(err);
    }
  }

  function CountNextWeek(data, type) {
    const utc = new Date(data);
    if (type) {
      utc.setDate(utc.getDate() + 7);
    } else {
      utc.setDate(utc.getDate() - 7);
    }

    return utc.toJSON().substr(0, 10);
  }

  return (
    <DashboardTemplate>
      <Wrapper>
        <SelectPlan
          TypePlan={FetchPlan}
          dataSelect={dataSelect}
          FetchSelect={FetchSelect}
          itemSelected={itemSelected}
          setItemSelected={SetItem}
          NextDay={NextDay}
          PrevDay={PrevDay}
        />
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
