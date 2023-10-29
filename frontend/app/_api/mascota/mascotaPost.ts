import axios from "axios";

interface Mascota {
  name: string | null;
  age: number | null;
  sex: string | null;
  specie: string |null;
  photo_url: string | null;
}
export default async function mascotaPost(mascota: Mascota) {
  try {
    const response = await axios.post(
      "https://s11-03-react-node-production.up.railway.app/api/v1/pets",
      mascota,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    
      return error.response;
    }

  }
