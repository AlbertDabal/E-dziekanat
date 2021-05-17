import axios from 'axios';

export const SetSelectDefault = async () => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/wypelnij_combobox_domyslnie`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetSelect = async (roleSelected) => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/wypelnij_combobox`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
      KodPlanu: roleSelected,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetPlan = async (kodPlanu, idPola, date) => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/zwroc_plan`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
      KodPlanu: kodPlanu,
      IdPola: idPola,
      DataOd: date.DataOd,
      DataDO: date.DataDo,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetActualyPlan = async () => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}plan/aktualny_plan`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
