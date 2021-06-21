import axios from 'axios';

const port = 80;
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${port}`;

export const SetLogin = async (login, password, match) => {
  const res = await axios
    .post('/api/logowanie/zaloguj', {
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
  const res = await axios.post('/api/logowanie/przypomnij_haslo', data).catch((error) => {
    console.log(error);
  });

  return res;
};

export const SetChangePassword = async (kod, haslo) => {
  const res = await axios
    .post('/api/logowanie/zmien_haslo', {
      Wygenerowany_kod: kod,
      Password: haslo,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
