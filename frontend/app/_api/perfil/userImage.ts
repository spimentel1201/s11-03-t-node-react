
import useTokenHook from "@/app/hooks/useTokenHooks";


export function UploadFile(file: File) {
  const { token } = useTokenHook()
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
    console.log(response.json())
    return response.json();
  });
}
