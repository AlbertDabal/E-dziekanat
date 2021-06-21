import axios from 'axios';

const port = 80;
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${port}`;

export const SetDashboardData = async () => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');

  const res = await axios
    .post('/api/kokpit/kokpit', {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
