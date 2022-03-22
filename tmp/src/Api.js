import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:4000/api/`,
  withCredentials: true
  
});

const userUrl = `http://localhost:4000/api/users`

export const getUserById = async (id) => {
  id = id || '';
  return await axios.get(`${userUrl}/${id}`);
};