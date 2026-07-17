import ChatBox from "../features/chat/pages/Chatbox";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const nav = useNavigate()
    return(
        <>
         <div className="w-screen min-h-screen bg-amber-400 grid grid-cols-4 grid-rows-2 gap-1">
              <div className="bg-amber-900"></div>
              <div className="bg-amber-900 col-span-2 row-span-2">
                <ChatBox />
              </div>
              <div className="bg-amber-900">
        
              </div>
              <div className="bg-amber-900">
                <button
                 onClick={()=>nav("/flashcards")}
                 className="bg-yellow-200 p-2 ">Go to the flashcard
                    
                </button>
              </div>
 
             

              
         </div>
        </>
    )
}