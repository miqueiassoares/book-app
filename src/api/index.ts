import axios from 'axios';

const key = process.env.NEXT_API_KEY;

const getBookCategory = () => {
  const anyNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  switch (anyNumber) {
    case 1:
      return 'harrypotter'
    case 2:
      return 'gameofthrones'
    case 3:
      return 'bigbang'
    default:
      return "books"
  }
}

const api = axios.create({
  baseURL: process.env.NEXT_BASE_URL
});

export const getSuggestions = async () => {
  const books = getBookCategory();
  const data = await api
    .get(`/volumes?q=${books}&maxResults=40`)
    .then((response) => response.data)
    .catch((error) => error);
  return data.items;
};

export const getQuery = async (query: string, similars=false) => {
  const data = await api
    .get(`/volumes?q=${query}&maxResults=${similars ? '10' : '40'}`)
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
