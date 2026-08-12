export async function getChats(){
    const res = await fetch(`http://localhost:5000/api/auth/chats`,{
        method:"GET",
        headers:{
            
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
        
    })
    const data = await res.json()
    if(!res.ok)throw new Error(data.message||"couldn't get chats");
    
    console.log(data)
      return data.chats || [];
    
}