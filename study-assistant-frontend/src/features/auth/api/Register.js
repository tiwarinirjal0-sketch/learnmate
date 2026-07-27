export async function register(formData) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

export async function login(formData){
  const res = await fetch(`${import.meta.env.VITE_API_URL}/login`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
    
  })
  const data = await res.json();

  if(!res.ok){
    console.log(data.status)
    throw new Error(data.message || "Registration failed")
  }
   return data;
}