import axios from 'axios';

// import FileDownload from 'js-file-download';

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

export const DownloadDocuments = async () => {
  axios({
    url: `${process.env.REACT_APP_ADDRESS}dokumenty/pobierz`,
    method: 'GET',
    body: {
      Id_dokumentu: 14,
    },
    headers: {
      Accept: 'application/json',
      responseType: 'blob',
    },
  }).then((response) => {
    console.log(JSON.stringify(response.data));
  });
};
