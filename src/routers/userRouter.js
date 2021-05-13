import express from 'express';
import { edit, logout, remove } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/remove', remove);

export default userRouter;
