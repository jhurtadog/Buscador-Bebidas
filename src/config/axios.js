import axios from "axios";

const clientAxios = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/"
});

export default clientAxios;