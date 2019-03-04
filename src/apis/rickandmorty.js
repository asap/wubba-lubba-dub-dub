import axios from 'axios';

export default axios.create({
  method: 'get',
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 5000,
});
