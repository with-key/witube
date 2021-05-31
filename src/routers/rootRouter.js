import express from 'express';
import { login, getJoin, postJoin } from '../controllers/userController';
import { home, search } from '../controllers/videoController';

// Router 만들고,
const rootRouter = express.Router();

// 각 Url 마다 Router.get을 생성한다.
rootRouter.get('/', home);
rootRouter.route('/join').get(getJoin).post(postJoin);
rootRouter.get('/login', login);
rootRouter.get('/search', search);

export default rootRouter;
