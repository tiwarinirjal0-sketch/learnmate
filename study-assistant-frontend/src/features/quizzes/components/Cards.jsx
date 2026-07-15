import { useState } from "react"




export default function QuizCards({qnIndex,quizData}){
    
    
    return(
        <div className="relative h-80 w-72 bg-amber-50 flex items-center justify-center">
           
            <div 
            
            className="absolute h-full w-full bg-amber-50 flex items-center justify-center">
             {quizData[qnIndex].qn}
            </div>
            
           
           
           
        </div>
    )
}