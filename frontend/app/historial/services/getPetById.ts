export const getPetById = (id: string) => {
  try {
    const url = `https://s11-03-react-node-production.up.railway.app/api/v1/pets/${id}`;
    return fetch(url, { cache: 'no-store' })
      .then((response) => response.json())
      .then((data) => data);
  } catch (err) {
    console.log(err);
  }
};
