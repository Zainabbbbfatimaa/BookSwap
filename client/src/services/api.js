import axios from "axios";

const api = axios.create({
  baseURL: "https://bookswap-9ry5.onrender.com/api"
});

export default api;