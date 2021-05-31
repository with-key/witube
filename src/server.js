// <<< --- server.js  : configuration 설정에 필요한 코드만 --- >>>

import express from 'express';
import logger from 'morgan';
import rootRouter from './routers/rootRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app = express();

// ---- view engine 설정 ---->
app.set('view engine', 'pug'); // view engine을 pug로 설정한다.
app.set('views', process.cwd() + '/src/views'); // views fold의 default cwd를 수정한다.

// ---- middle ware 설정
app.use(logger('dev')); //모든 경로에 logger 미들웨어를 실행시킴
app.use(express.urlencoded({ extended: true })); // view input에서 form action으로 post했을 때, 백엔드에서 input name으로 된 객체를 받게 하는 설정

// ---- router 설정 ---->
app.use('/', rootRouter); // rootRouter 를 '/'의 하위로 그룹화 시킴
app.use('/users', userRouter);
app.use('/videos', videoRouter);

export default app;
