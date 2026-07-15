import QuizApi from "../api/quiz.api";
import QuizCards from "../components/Cards";
import { useEffect, useState } from "react";
;

export default function Quiz(){
    const [qnIndex, setQnIndex] = useState(0)
    const [quizData, setQuizData] = useState([
        {qn:"what is your name", ans:"my name is nirjal"},
        {qn:"age", ans:50}
    ])
    useEffect(
        ()=>{
         const apiCall = async ()=>{
            const quizzes = await QuizApi( "Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy. It occurs mainly in the chloroplasts of plant cells...")
         
           setQuizData(quizzes)
         }
         apiCall()
        },[])
    return (
        <div className="flex gap-2 flex-col min-h-screen min-w-screen items-center bg-blue-200 flex justify-center ">

            <QuizCards qnIndex={qnIndex} quizData={quizData}/>
             <div className="flex gap-4 ">
               <button  
                disabled={qnIndex===0}
                className="bg-cyan-700 p-2 rounded-2xl hover:text-amber-50 disabled:bg-blue-400  disabled:cursor-not-allowed"
                onClick={()=>setQnIndex(prev=>prev-1)}
                >
                 Prev
               </button>
              <button
               disabled={qnIndex=== quizData.length-1}
                onClick={()=>setQnIndex(prev=>prev+1)}

               className="bg-cyan-700 p-2 rounded-2xl  hover:text-amber-500 disabled:cursor-not-allowed" >
                Next
              </button>
             </div>
        </div>
    )
}