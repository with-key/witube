import express from 'express';
const PORT = 4000;
const app = express();

// init
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// get
const handleHome = (req, res) => {
  return res.send('hello world!');
};
const handleLogin = (req, res) => {
  return res.send('login');
};

app.get('/', handleHome);
app.get('/login', handleLogin);

app.listen(PORT, handleListening);
// listen은 콜백함수를 인자로 받는다. 인자로 받은 콜백함수를 실행한다.
