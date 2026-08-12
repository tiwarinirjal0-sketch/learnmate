export async function chatApi(message) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message.map((msg) => ({
                    role: msg.role,
                    parts: [
                        {
                            text: msg.text
                        }
                    ]
                }))
            })
        });

        const data = await res.json();

     
        console.log(data)
        return data;
        

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function ChatCreate(){
    
        const res = await fetch(`${import.meta.env.VITE_API_URL}/chatCreate`,{
            method:"POST",
            headers:{
               "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        
        const data = await res.json()
        if(!res.ok)throw new Error(data.message||"Failed to create chat");
        console.log(data)
        localStorage.setItem("chatId",data.chat._id)
        return data
        
    
}

export async function AddChats(messages){
    const res = await fetch(`${import.meta.env.VITE_API_URL}/addChats/${localStorage.getItem('chatId')}`,{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(messages[messages.length-1])

    })
    const data = await res.json()
    if(!res.ok)throw new Error(data.message||"creation failed");
    console.log(data)
    
}

