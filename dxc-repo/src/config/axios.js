import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:",
});

export default clienteAxios;
