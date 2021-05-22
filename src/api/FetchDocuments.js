import axios from 'axios';

export const SetDocuments = async () => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}dokumenty`, {
      Ilosc: 10,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
