import axios from 'axios'


const url = "http://localhost:8000/users"

const url1 = "http://localhost:8000/users/add"

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async(user) => {
    return axios.post(url1, user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}


