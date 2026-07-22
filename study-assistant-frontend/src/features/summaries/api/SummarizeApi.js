
export default async function SummarizeApi(content){
   try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/summarize`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
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
    return data
    } catch (error) {
      return error.message
   }
}