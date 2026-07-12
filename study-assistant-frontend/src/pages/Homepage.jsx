import ChatBox from "../features/chat/pages/Chatbox";
import { Navigate,useNavigate } from "react-router-dom";

export default function Home(){
     const nav = useNavigate()
    return(

        <>
         <div className="w-screen min-h-screen bg-amber-400 grid grid-cols-4 grid-rows-2 gap-1">
              <div className="bg-amber-900 flex items-center justify-center">
                 <button 
                 onClick={()=>nav('/quiz')}
                 className="text-white bg-cyan-600 p-2 rounded-2xl hover:bg-blue-300 hover:text-black">Go to quiz</button>
              </div>
              <div className="bg-amber-900 col-span-2 row-span-2">
                <ChatBox />
              </div>
              <div className="bg-amber-900"></div>
              <div className="bg-amber-900"></div>
 
             

              
         </div>
        </>
    )
}