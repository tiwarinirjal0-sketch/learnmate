export async function chatApi(message) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message.map((msg) => ({
                    role: msg.role,
                    parts: [
                        {
                            text: msg.text
                        }
                    ]
                }))
            })
        });

        const data = await res.json();

     

        return data;
        console.log(data)

    } catch (error) {
        console.error(error);
        throw error;
    }
}