import { Router } from 'express';
import { register, login, getUser, updateUser, Chat, FlashCard,QuizGenerator } from '../controllers/auth.controller.js';
import { auth, verifyUser, localVariables } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', verifyUser, login);
router.get('/user/:username', auth, getUser);
router.put('/update', auth, updateUser);
router.post('/chat', Chat)
router.post('/quiz',QuizGenerator)
router.post('/flashcard', FlashCard)

export default router;
