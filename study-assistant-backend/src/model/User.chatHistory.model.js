import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        default: "New Chat"
    },

    model: {
        type: String,
        default: "gemini-2.5-flash"
    },

    messages: [
        {
            role: String, // "user" or "assistant"
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Chat", ChatSchema);