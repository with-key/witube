import express from 'express';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import logger from 'morgan';

const PORT = 4000;
const app = express();

app.set('view engine', 'pug'); // pug 설정 (template engine == flask jinja)
app.set('views', process.cwd() + '/src/views'); // views fold의 default cwd를 수정한다.
app.use(logger('dev')); //모든 경로에 logger 미들웨어를 실행시킴

app.use('/', globalRouter); // globalRouter 를 '/'의 하위로 그룹화 시킴
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
