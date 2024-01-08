import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

interface IUserData {
  fullname: string;
  username: string;
  gender: string;
  email: string;
  password: string;
  dateofbirth: Date;
}

interface ISignInData {
  email: string,
  password: string
}

const config = (method:string, jwt?: string) => {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': method,
    Authorization: `Bearer ${jwt}`
    }
}



export const signUpUser = async (userData: IUserData) => { 
  
  const res = await api
    .post('/signup', JSON.stringify(userData), { headers: config('POST')})
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.data) {
        return error.response.data
      }
      return error;
    });
  return res;
};

export const signInUser = async (userData: ISignInData) => { 
  
  const data = await api
    .post('/signin', JSON.stringify(userData), { headers: config('POST')})
    .then((response) => response.data)
    .catch((error) => ({
      ...error.response
    }));
  return data;
};

export const getDataUser = async (id: number, jwt: string) => { 
  
  const data = await api
    .get(`/user/${id}` , { headers: config('GET', jwt)})
    .then((response) => response.data)
    .catch((error) => error);
  return data;
};

export const deleteUser = async (id: number, jwt: string) => { 
  console.log(id);
  
  const data = await api
    .delete(`/user/${id}` , { headers: config('DELETE', jwt)})
    .then((response) => response.data)
    .catch((error) => error);
  return data;
};


