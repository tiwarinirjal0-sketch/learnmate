export async function register(formData) {
  const res = await fetch(`http://localhost:5000/api/auth/register`, {
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
  const res = await fetch(`http://localhost:5000/api/auth/login`,{
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