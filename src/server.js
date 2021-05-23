import './db';
import Video from './model/Video';
import express from 'express';
import logger from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;
const app = express();

// ---- view engine 설정 ---->
app.set('view engine', 'pug'); // view engine을 pug로 설정한다.
app.set('views', process.cwd() + '/src/views'); // views fold의 default cwd를 수정한다.
// ----

// ---- middle ware 설정
app.use(logger('dev')); //모든 경로에 logger 미들웨어를 실행시킴
// ----
app.use(express.urlencoded({ extended: true }));
// ---- router 설정 ---->
app.use('/', globalRouter); // globalRouter 를 '/'의 하위로 그룹화 시킴
app.use('/users', userRouter);
app.use('/videos', videoRouter);
// ----

// ---- app.listen handler (app 실행했을 때 가장 처음에 실행되는 것)
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
// ----

app.listen(PORT, handleListening);
