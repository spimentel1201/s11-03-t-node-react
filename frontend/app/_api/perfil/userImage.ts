import UseToken from "@/app/hooks/token";

export function uploadFile(file: File) {
  const {token} = UseToken()
  const formData = new FormData();
  formData.append("file", file);
  return fetch(
    "https://s11-03-react-node-production.up.railway.app/api/v1/images/upload",
    {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("we will be back soon ");
    }
    return response.json();
  });
}
