export function chatApi(message){
    try {
        const res = await fetch('',{
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                message:message
            })
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}