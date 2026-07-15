

export default async function QuizApi(content){
    try {
       const res = await fetch(`${import.meta.env.VITE_API_URL}/quiz`,{
           method:"POST",
           headers:{
            "Content-Type":"application/json",
            },
            body:JSON.stringify({
                contents:content
            })

       })
       if (!res.ok) {
        let message = "Something went wrong";

        try {
            const errorData = await res.json();
            message = errorData.message || JSON.stringify(errorData);
        } catch {
            message = await res.text();
        }

        throw new Error(message);
        }
       const data = await res.json()
       console.log(data)
       return data;
       
       
    }
     catch (error) {
       console.log(`error: ${error}`) 
    }
}