import axios from 'axios';

const port = 80;
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${port}`;

export const SetNews = async () => {
  const res = await axios
    .post('/api/aktualnosci', {
      Ilosc: 4,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
