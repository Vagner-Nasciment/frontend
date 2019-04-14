import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-backen.herokuapp.com",
});

export default api;