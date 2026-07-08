
export async function chatApi(message){
    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/chat`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                message:message.map((msg)=>({
                    role:msg.role,
                    parts:[
                        {
                            text:msg.text
                        }
                    ]
                }))
            })
        })
        console.log("Status:", res.status);

         const text = await res.text();
         console.log("Response:", text);
        return text
    } catch (error) {
        console.log(error)
    }
}