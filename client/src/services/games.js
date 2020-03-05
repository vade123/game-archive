import axios from 'axios';

const getAll = () => {
  const req = axios.get('/api/games/all');
  return req.then((res) => res.data);
}

export default { getAll };