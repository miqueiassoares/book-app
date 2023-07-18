import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_BASE_URL
});

export const getSuggestions = async () => {
  const data = await api
    .get('/volumes?q=flowers')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return {
        message: 'error na requisição',
        status: 400
      };
    });
  return data.items;
};

export const getQuery = async (query: string) => {
  const data = await api
    .get(`/volumes?q=${query}`)
    .then((response) => {
      return response.data;
    })
    .catch((erro) => {
      return {
        message: 'erro na requisição',
        status: 404
      };
    });
  return data.items;
};
