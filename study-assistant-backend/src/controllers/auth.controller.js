import dotenv from 'dotenv';
dotenv.config();


import UserModel from '../model/User.model.js';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../utils/helper.js';
import { GoogleGenAI } from '@google/genai';


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

export async function register(req, res) {
    try {
        const { username, password, email, profile } = req.body;

        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) return res.status(400).send({ error: 'Username already exists!' });

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) return res.status(400).send({ error: 'Email already registered!' });

        const hashedPassword = await hashPassword(password);
        await new UserModel({ username, password: hashedPassword, profile: profile || '', email }).save();

        return res.status(201).send({ msg: 'User Registered Successfully.' });
    } catch (err) {
        return res.status(500).send(err);
    }
}

export async function login(req, res) {
    try {
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });
        if (!user) return res.status(404).send({ error: 'User Not Found' });

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) return res.status(400).send({ error: 'Invalid Password' });

        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });

        return res.status(200).send({ msg: 'Login Successful', token });
    } catch (err) {
        return res.status(500).send(err);
    }
}

export async function getUser(req, res) {
    try {
        const { username } = req.params;
        const user = await UserModel.findOne({ username }).select('-password');
        if (!user) return res.status(404).send({ error: 'User Not Found' });
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err);
    }
}

export async function updateUser(req, res) {
    try {
        const { userId } = req.user;
        const data = req.body;
        await UserModel.findByIdAndUpdate(userId, data);
        return res.status(200).send({ msg: 'User Updated Successfully' });
    } catch (err) {
        return res.status(500).send(err);
    }
}

export async function Chat(req, res){
    try {
        
        
        const response = await ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents : req.body.message
        })
        return res.status(200).json({
            reply:response.text
        })

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

export async function FlashCard(req, res){
    try{
       const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:`Create flashcards from the input.

                Return only a JSON array of objects:

                [{"front":"Question","back":"Answer"}]

                Cover the important concepts. No markdown or extra text.

                ${JSON.stringify(req.body)}`
       })
       return res.status(200).json({
        result : JSON.parse(await response.text)})
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}