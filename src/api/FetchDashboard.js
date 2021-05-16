import axios from 'axios';

export const SetDashboardData = async () => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}kokpit/kokpit`, {
      Id_uzytkownika: 2,
      Kod_roli: 'student',
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
