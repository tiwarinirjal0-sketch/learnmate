import { Router } from 'express';
import { register, login, getUser, updateUser, Chat, FlashCard,QuizGenerator, Summarize, CreateNewChat, ReceiveChats, AddMessageToChat } from '../controllers/auth.controller.js';
import { auth, verifyUser, localVariables } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user/:username', auth, getUser);
router.put('/update', auth, updateUser);
router.post('/chat', Chat)
router.post('/quiz',QuizGenerator)
router.post('/flashcard', FlashCard)
router.post('/summarize', Summarize)
router.post('/chatCreate', auth , CreateNewChat)
router.post('/addChats/:id',auth,AddMessageToChat)
router.get("/chats", auth, ReceiveChats)


export default router;
