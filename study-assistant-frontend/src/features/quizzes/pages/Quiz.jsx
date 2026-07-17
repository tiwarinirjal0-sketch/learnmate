
import { useState,useEffect } from "react";
import  QuizApi from "../api/quiz.api"
import QuizCards from "../components/Cards";

export default function Quiz() {
    const [qnIndex, setQnIndex] = useState(0);
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            try {
                setLoading(true);
                setError(null);
                const quizzes = await QuizApi(
                    "Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy. It occurs mainly in the chloroplasts of plant cells..."
                );
                setQuizData(Array.isArray(quizzes) ? quizzes : [quizzes]);
            } catch (err) {
                console.log(`error: ${err}`);
                setError(err.message);
                setQuizData([]);
            } finally {
                setLoading(false);
            }
        };
        apiCall();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (quizData.length === 0) return <div>No quiz data available.</div>;

    return (
        <div className="flex gap-2 flex-col min-h-screen min-w-screen items-center bg-blue-200 flex justify-center ">
            <QuizCards qnIndex={qnIndex} quizData={quizData} />
            <div className="flex gap-4 ">
                <button
                    disabled={qnIndex === 0}
                    className="bg-cyan-700 p-2 rounded-2xl hover:text-amber-50 disabled:bg-blue-400 disabled:cursor-not-allowed"
                    onClick={() => setQnIndex(prev => prev - 1)}
                >
                    Prev
                </button>
                <button
                    disabled={qnIndex === quizData.length - 1}
                    onClick={() => setQnIndex(prev => prev + 1)}
                    className="bg-cyan-700 p-2 rounded-2xl hover:text-amber-500 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
}