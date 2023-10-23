import axios from "axios";

const BASE_URL = "https://s11-03-react-node-production.up.railway.app/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getPetsService = async () => {
  try {
    const res = await api.get("/pets?limit=20");
    console.log("Respuesta de la API:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    return error;
  }
};
