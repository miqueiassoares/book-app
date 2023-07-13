import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_BASE_URL
});

export const getHome = async () => {
  const data = await api
    .get('/volumes?q=javascript')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return {
        message: 'error na requisição',
        status: 400
      };
    });
  return data;
};
