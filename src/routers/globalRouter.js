import express from 'express';
import { login, join } from '../controllers/userController';
import { trending, search } from '../controllers/videoController';

// Router 만들고,
const globalRouter = express.Router();

// 각 Url 마다 Router.get을 생성한다.
globalRouter.get('/', trending);
globalRouter.get('/join', join);
globalRouter.get('/login', login);

export default globalRouter;
