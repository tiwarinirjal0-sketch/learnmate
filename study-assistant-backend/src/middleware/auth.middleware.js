import jwt from 'jsonwebtoken';
import UserModel from '../model/User.model.js';

export async function auth(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({ error: 'Unauthorized' });
    }
}

export async function verifyUser(req, res, next) {
    try {
        const { username } = req.method == 'GET' ? req.query : req.body;
        const user = await UserModel.findOne({ username });
        if (!user) return res.status(404).send({ error: 'Username Not Found' });
        next();
    } catch (err) {
        return res.status(404).send(err);
    }
}

export async function localVariables(req, res, next) {
    try {
        req.app.locals = { OTP: null, resetSession: false };
        next();
    } catch (err) {
        return res.status(401).send(err);
    }
}
