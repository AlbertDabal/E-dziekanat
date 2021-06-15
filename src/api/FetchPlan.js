import axios from 'axios';

const port = 80;
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${port}`;

export const SetSelectDefault = async () => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');
  const res = await axios
    .post('/api/plan/wypelnij_combobox_domyslnie', {
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
    .post('/api/plan/wypelnij_combobox', {
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
    .post('/api/plan/zwroc_plan', {
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
    .post('/api/plan/aktualny_plan', {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
