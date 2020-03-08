import axios from 'axios';

const getAll = () => {
  const req = axios.get('/api/games/all');
  return req.then((res) => res.data);
};

const add = ( password, name, text ) => {
  const params = {
    password,
    name,
    text
  };
  const req = axios.post('/api/games/add', params);
  return req.then((res) => res.data);
};

export default { getAll, add };