import axios from 'axios';

export const SetDashboardData = async () => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');

  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}kokpit/kokpit`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
