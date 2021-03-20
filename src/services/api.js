import axios from 'axios';

axios.create({
  baseURL: 'https://private-f8c8ac-webjumptest.apiary-mock.com',
  // baseURL: 'https://api.trakt.tv/',
  headers: {
    'Content-type': 'application/json',
    'trakt-api-key': '76317799728ffbd2614011e0464f1a90',
    'trakt-api-version': 2,
  },
});
