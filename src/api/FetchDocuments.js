import axios from 'axios';

import FileDownload from 'js-file-download';

const port = 80;
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${port}`;

export const SetDocuments = async () => {
  const res = await axios
    .post('/api/dokumenty', {
      Ilosc: 10,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const DownloadDocuments = async () => {
  axios({
    url: '/api/dokumenty/pobierz',
    method: 'GET',
    body: {
      Id_dokumentu: 14,
    },
    headers: {
      Accept: 'application/json',
      responseType: 'blob',
    },
  }).then((response) => {
    FileDownload(response.data, 'report.txt');
  });
};
