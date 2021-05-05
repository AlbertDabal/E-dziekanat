import axios from 'axios';

export const SetSelectDefault = async () => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/wypelnij_combobox_domyslnie`, {
      Id_uzytkownika: 2,
      Kod_roli: 'student',
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetSelect = async () => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/wypelnij_combobox`, {
      Id_uzytkownika: 2,
      Kod_roli: 'student',
      KodPlanu: 'wykladowca',
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetPlan = async (kodPlanu, idPola) => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/zwroc_plan`, {
      Id_uzytkownika: 2,
      Kod_roli: 'student',
      KodPlanu: kodPlanu,
      IdPola: idPola,
      DataOd: '2021-04-26',
      DataDO: '2021-04-27',
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetActualyPlan = async () => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/aktualny_plan`, {
      Id_uzytkownika: 2,
      Kod_roli: 'student',
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};
