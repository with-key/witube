import express from 'express';
import { watch } from '../controllers/videoController';

const videoRouter = express.Router();
videoRouter.get('/watch', watch);

export default videoRouter;
