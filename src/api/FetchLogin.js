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

  if (res.data !== null) {
    console.log(res);
    sessionStorage.setItem('isAuth', true);
    sessionStorage.setItem('ImieNazwisko', res.data.ImieNazwisko);
    sessionStorage.setItem('Id_uzytkownika', res.data.Id_uzytkownika);
    sessionStorage.setItem('Kod_roli', res.data.Kod_roli);
  }

  return res;
};

export const SetLostPassword = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_ADDRESS}logowanie/przypomnij_haslo`, data).catch((error) => {
    console.log(error);
  });

  return res;
};

export const SetChangePassword = async (kod, haslo) => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}logowanie/zmien_haslo`, {
      Wygenerowany_kod: kod,
      Password: haslo,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
