import axios from 'axios';

export const SetLogin = async (login, password, match) => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}logowanie/zaloguj`, {
      login,
      password,
      kod_roli: match,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetLostPassword = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_ADDRESS}logowanie/przypomnij_haslo`, data).catch((error) => {
    console.log(error);
  });

  return res;
};
