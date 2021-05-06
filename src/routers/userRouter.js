import express from 'express';
import { edit } from '../controllers/userController';

const userRouter = express.Router();
userRouter.get('/edit', edit);

export default userRouter;
