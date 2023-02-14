import axios from 'axios';
const users = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
});

const params = {
  page: 1,
  count: 6,
};

const config = {
  headers: {
    Token: null,
  },
  body: null,
};

export const API__TOKEN = async () => {
  const { data } = await users.get('/token');
  return data;
};

export const API__DATA = async () => {
  const { data } = await users.get('/users', { params });
  return data;
};

export const API__LOAD__MORE = async page => {
  params.page = page;
  const { data } = await users.get('/users', { params });
  return data;
};

export const API__POST__USER = async (formData, token) => {
  config.headers.Token = token;
  config.body = formData;

  const response = await users.post('/users', config);
  return response.data;
};
