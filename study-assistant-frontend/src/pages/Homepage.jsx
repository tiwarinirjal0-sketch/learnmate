import ChatBox from "../features/chat/pages/Chatbox";

export default function Home(){
    return(
        <>
         <div className="w-screen min-h-screen bg-amber-400 grid grid-cols-4 grid-rows-2 gap-1">
              <div className="bg-amber-900"></div>
              <div className="bg-amber-900 col-span-2 row-span-2">
                <ChatBox />
              </div>
              <div className="bg-amber-900"></div>
              <div className="bg-amber-900"></div>
 
             

              
         </div>
        </>
    )
}