import axios from 'axios';

export const SetPools = async () => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');

  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}ankieta/lista_ankiet`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetPoolsDetails = async (id) => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');

  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}ankieta/ankieta`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
      IdAnkiety: id,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const PoolsSubmit = async (id, choose) => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');

  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}ankieta/zaglosuj`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
      IdAnkiety: id,
      IdWyboru: choose,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const NewAnswerPool = async (id, tresc) => {
  const idUzytkownika = sessionStorage.getItem('Id_uzytkownika');
  const kodRoli = sessionStorage.getItem('Kod_roli');

  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}ankieta/wlasna_odpowiedz`, {
      Id_uzytkownika: idUzytkownika,
      Kod_roli: kodRoli,
      IdAnkiety: id,
      Tresc: tresc,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
