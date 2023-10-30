export default async function getClientById() {

    try {
    
       const response = await fetch(
         "https://s11-03-react-node-production.up.railway.app/api/v1/clients/profile",
         {
           headers: {
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
         }
       );
       const data = response.json();
       return data;
     } catch (error) {
       console.error("Error fetching client data:", error);
       throw error;
     }
   }