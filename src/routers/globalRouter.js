import express from 'express';
import { login, join } from '../controllers/userController';
import { home, search } from '../controllers/videoController';

// Router 만들고,
const globalRouter = express.Router();

// 각 Url 마다 Router.get을 생성한다.
globalRouter.get('/', home);
globalRouter.get('/join', join);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter;
