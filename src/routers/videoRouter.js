import express from 'express';
import {
  watch,
  edit,
  upload,
  deleteVideo,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', watch); // Regex를 이용한 url parameter 제어
videoRouter.get('/:id/edit', edit);
videoRouter.get('/:id/delete', deleteVideo);

export default videoRouter;
