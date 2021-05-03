import express from 'express';
import logger from 'morgan';
const PORT = 4000;
const app = express();
app.use(logger('dev'));

// Router
const globalRouter = express.Router();
const handleHome = (req, res) => res.send('Home');
globalRouter.get('/', handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send('Edit User');
userRouter.get('/edit', handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send('Watch Vides');
videoRouter.get('/watch', handleWatchVideo);

app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
