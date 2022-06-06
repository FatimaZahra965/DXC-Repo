import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://dxcrepo-activite.azurewebsites.net::",
});

export default clienteAxios;
