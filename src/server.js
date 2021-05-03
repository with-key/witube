import express from 'express';
import logger from 'morgan';
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send('this is the controller!');
};
const handleLogin = (req, res) => {
  return res.send('this is the login page!');
};

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.use(logger('dev'));
// app.use() 에 넣은 미들웨어는 모든 경로에서 실행된다.
app.get('/', handleHome);
app.get('/login', handleLogin);
app.listen(PORT, handleListening);
// listen은 콜백함수를 인자로 받는다. 인자로 받은 콜백함수를 실행한다.
