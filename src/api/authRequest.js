import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;


const API = axios.create({ baseURL: 'http://localhost:4003' });

 
export const register = (formData) => API.post(`/user/signup`, formData);
export const login = (formData) => API.post(`/user/login`, formData);
export const getUser = (formData) => API.get(`/user/getUser`, formData);
export const updateUserData = (id,formData) => {
    console.log(formData);
    const token = JSON.parse(localStorage.getItem("token"))
    return API.put(`/user/${id}`, formData, {headers: {token}});
} 

export const getCartItems = (formData) => API.get(`/user/getCartItems`, formData);
