import { useEffect, useState } from "react"
import { useHistoryContext } from "../../../context/HistoryContext"
import { getChats } from "../api/historyapi"
import { useNavigate } from "react-router-dom"

export default function ChatHistory(){
    
    const [data, setData ] = useState([
       
    ])
    const {showChatHistory} = useHistoryContext()
    const nav = useNavigate()
    useEffect(()=>{
        if(showChatHistory){
            const loadChats = async()=>{
                try {
                    const result = await getChats()
                    setData(result)
                    console.log(result)
                } catch (error) {
                    setData([])
                }
            }
            loadChats()
        }
    },[showChatHistory])
    return(
        <>
          <div className="flex gap-2 flex-col px-5 min-w-screen min-h-screen bg-amber-400">
             {data.map(item=>(
                <div 
                onClick={()=>{
                    nav("/chatspecific")
                    console.log(item._id)
                    localStorage.setItem('chatId', item._id)
                }}
                className="flex justify-around items-center rounded-2xl w-full h-20 bg-red-400">
                    <div>{item.title}</div>
                    <div>{item.createdAt}</div>

                    </div>

             ))}
          </div>
        </>
    )
}