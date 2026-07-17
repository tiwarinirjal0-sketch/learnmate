export default async function FlashcardApi(content) {
    // --- TEMPORARY: hardcoded mock, remove once backend is ready ---
    console.log("Mock FlashcardApi called with content:", content);

    await new Promise((resolve) => setTimeout(resolve, 1200)); // fake network delay

    return [
        { front: "What is the powerhouse of the cell?", back: "The mitochondria" },
        { front: "What pigment absorbs light for photosynthesis?", back: "Chlorophyll" },
        { front: "What gas do plants release during photosynthesis?", back: "Oxygen" },
        { front: "Where does photosynthesis mainly occur in plant cells?", back: "Chloroplasts" },
        { front: "What are the two main stages of photosynthesis?", back: "Light-dependent reactions and the Calvin cycle" },
    ];

    // --- REAL VERSION: uncomment when backend is ready ---
    /*
    const res = await fetch(`${import.meta.env.VITE_API_URL}/flashcards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: content })
    });

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

    const data = await res.json();
    return data.result;
    */
}