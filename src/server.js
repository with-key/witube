import express from 'express';
const PORT = 4000;
const app = express();

// init

// 미들웨어 :app.get의 controller가 실행되기 전에 중간에 실행되는 controller
const logger = (req, res, next) => {
  console.log(`미들웨어 : ${req.method} ${req.url}`);
  next(); // 작업을 다음함수에게 넘긴다.
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === '/protected') {
    return res.send('<div>Not Allowed</div>');
  }
  next(); // 조건에 해당하면, return 되고 해당하지 않으면 next() 된다. (다음 함수를 실행한다.)
};

const handleHome = (req, res) => {
  return res.send('l love middleware');
};

app.use(logger); //모든 경로에서 사용할 수 있는 미들웨어 (app.use), 코드의 순서가 중요 (app.get위에 있어야 함)
app.use(privateMiddleware);
app.get('/', handleHome);
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
// listen은 콜백함수를 인자로 받는다. 인자로 받은 콜백함수를 실행한다.
