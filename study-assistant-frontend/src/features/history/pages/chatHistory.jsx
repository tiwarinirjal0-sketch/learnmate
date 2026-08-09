import { useEffect, useState } from "react"
import { useHistoryContext } from "../../../context/HistoryContext"
import { getChats } from "../api/historyapi"
import { useNavigate } from "react-router-dom"

export default function ChatHistory() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { showChatHistory } = useHistoryContext()
    const nav = useNavigate()

    useEffect(() => {
        if (showChatHistory) {
            const loadChats = async () => {
                setLoading(true)
                try {
                    const result = await getChats()
                    setData(result)
                } catch (error) {
                    setData([])
                } finally {
                    setLoading(false)
                }
            }
            loadChats()
        }
    }, [showChatHistory])

    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        const now = new Date()
        const sameDay = date.toDateString() === now.toDateString()
        if (sameDay) {
            return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
        }
        return date.toLocaleDateString(undefined, { month: "short", day: "numeric" })
    }

    return (
        <div className="min-w-screen min-h-screen bg-neutral-950 px-5 py-8">
            <div className="mx-auto max-w-2xl">
                <h1 className="mb-6 px-1 text-sm font-medium tracking-wide text-neutral-400">
                    Chat History
                </h1>

                {loading && (
                    <div className="flex flex-col gap-2">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="h-16 w-full animate-pulse rounded-xl bg-neutral-900"
                            />
                        ))}
                    </div>
                )}

                {!loading && data.length === 0 && (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-800 py-16 text-center">
                        <p className="text-sm text-neutral-500">No conversations yet</p>
                        <p className="mt-1 text-xs text-neutral-600">
                            Start a new chat to see it appear here.
                        </p>
                    </div>
                )}

                {!loading && data.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                        {data.map((item) => (
                            <button
                                key={item._id}
                                onClick={() => {
                                    nav("/chatspecific")
                                    localStorage.setItem("chatId", item._id)
                                }}
                                className="group flex w-full items-center justify-between rounded-xl border border-transparent bg-neutral-900/60 px-4 py-3.5 text-left transition-colors duration-150 hover:border-neutral-800 hover:bg-neutral-900"
                            >
                                <span className="truncate text-[15px] font-normal text-neutral-100 group-hover:text-white">
                                    {item.title || "Untitled chat"}
                                </span>
                                <span className="ml-4 shrink-0 text-xs text-neutral-500 group-hover:text-neutral-400">
                                    {formatDate(item.createdAt)}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}