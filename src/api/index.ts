import axios from 'axios';

const key = process.env.NEXT_API_KEY;

const api = axios.create({
  baseURL: process.env.NEXT_BASE_URL
});

export const getSuggestions = async () => {
  const data = await api
    .get(`/volumes?q=flowers`)
    .then((response) => response.data)
    .catch((error) => error);
  return data.items;
};

export const getQuery = async (query: string) => {
  const data = await api
    .get(`/volumes?q=${query}`)
    .then((response) => response.data)
    .catch((error) => error);
  return data.items;
};

export const getBook = async (id: string) => {
  const data = await api
    .get(`/volumes/${id}`)
    .then((response) => response.data)
    .catch((error) => error);

  return data;
};
