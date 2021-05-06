import express from 'express';
import { trending } from '../controllers/videoController';

const globalRouter = express.Router();
globalRouter.get('/', trending);

export default globalRouter;
