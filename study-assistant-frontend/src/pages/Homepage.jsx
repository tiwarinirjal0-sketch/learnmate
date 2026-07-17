import ChatBox from "../features/chat/pages/Chatbox";
<<<<<<< HEAD
import { Navigate,useNavigate } from "react-router-dom";

export default function Home(){
     const nav = useNavigate()
=======
import { useNavigate } from "react-router-dom";
export default function Home(){
    const nav = useNavigate()
>>>>>>> fetaure/flashcard
    return(

        <>
         <div className="w-screen min-h-screen bg-amber-400 grid grid-cols-4 grid-rows-2 gap-1">
              <div className="flex items-center justify-center py-10">
                <button
                    onClick={() => nav('/quiz')}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#1F2A44] text-white font-['Inter'] text-base font-medium overflow-hidden shadow-lg shadow-[#1F2A44]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#F2A93B]/30 hover:-translate-y-0.5"
                >
                    {/* Amber sweep on hover */}
                    <span className="absolute inset-0 bg-[#F2A93B] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />

                    {/* Text + icon sit above the sweep */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1F2A44]">
                        Go to Quiz
                    </span>
                    <svg
                        className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1F2A44]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
              </div>
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