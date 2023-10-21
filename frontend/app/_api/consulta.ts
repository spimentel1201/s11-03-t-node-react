
export async function addConsulta(fullname:string, email:string, message:string) {
  try {
    const response = await fetch('https://s11-03-react-node-production.up.railway.app/api/v1/clients/send-mail', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });


    const data = await response.json();
    return data
  } catch (error) {
     error
  }
}
      