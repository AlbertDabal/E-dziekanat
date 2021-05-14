import axios from 'axios';

export const SetNews = async () => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}aktualnosci`, {
      Ilosc: 4,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
