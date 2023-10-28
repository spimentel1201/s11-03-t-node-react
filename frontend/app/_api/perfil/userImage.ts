
import axios, { AxiosResponse } from "axios";

export async function uploadFile(file: File): Promise<AxiosResponse<any>> {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://s11-03-react-node-production.up.railway.app/api/v1/images/upload",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        transformRequest: (data, headers) => {
          // Remove the 'Content-Type' header if it's set to 'false'
          if (headers['Content-Type'] === 'false') {
            delete headers['Content-Type'];
          }
          return data;
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// export async function uploadFile(file: File) {
//   const token = localStorage.getItem("token");
//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const response = await axios.post(
//       "https://s11-03-react-node-production.up.railway.app/api/v1/images/upload",
//       formData,
//       {
//         headers: {
//           ContentType: 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     // Assuming the response has a 'data' field with the desired information
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
// export function uploadFile(file: File) {

//   const token = localStorage.getItem("token")
//   const formData = new FormData();
//   formData.append("file", file);
//   return fetch(
//     "https://s11-03-react-node-production.up.railway.app/api/v1/images/upload",
//     {
//       method: "POST",
//       body: formData,
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   ).then((response) => {
//     // if (!response.ok) {
//     //   throw new Error("we will be back soon ");

//     // }
//     console.log(response)
//     return response.json();
//   }).catch((error) => {
//     console.log(error)
// })
// }
