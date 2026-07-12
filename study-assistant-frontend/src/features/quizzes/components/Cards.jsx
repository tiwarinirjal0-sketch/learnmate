import { useState } from "react"




export default function QuizCards(){
    const quizzes = [
        {qn:"what is your name", ans:"my name is nirjal"},
        {qn:"age", ans:50}
    ]
    const [flip, setFlip] = useState(false)
    return(
        <div className="relative h-80 w-72 bg-amber-50 flex items-center justify-center">
           {quizzes.map(item=>(
            <div 
            onClick={()=>setFlip(prev=>!prev)}
            className="absolute h-full w-full bg-amber-50 flex items-center justify-center">
             {flip?item.ans:item.qn}
            </div>
            
           
           ))}
        </div>
    )
}