import { useEffect,useState } from "react";
import ChatBox from "../../chat/pages/Chatbox";

export default function ChatSpecific(){
    const [data, setdata] = useState([])
    useEffect(()=>{
        const loadData = async()=>{
            try {
              const res = await fetch(`${import.meta.env.VITE_API_URL}/specificChat/${localStorage.getItem('chatId')}`,{
                  method:"GET",
                  headers:{
                    "Authorization":`Bearer ${localStorage.getItem('token')}`
                  }
                })
                const data = await res.json()
                const rawData = data.chats[0].messages

                const refinedData = rawData.map(item=>{
                    return {role:item.role, text:item.text}
                })
                console.log(refinedData)
                setdata(refinedData)
                
                
               
            } catch (error) {
                console.log(error)
                setdata([])
            }
        }
        loadData()
    },[])
    return(
        <div className="min-w-screen min-h-screen flex bg-amber-200 items-center justify-center ">
            <ChatBox prevMessages={data}/>

        </div>
    )
}