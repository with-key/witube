import express from 'express';
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.route('/upload').get(getUpload).post(postUpload);
videoRouter.route('/:id([0-9a-f]{24})/edit').get(getEdit).post(postEdit);
videoRouter.get('/:id([0-9a-f]{24})', watch); // Regex를 이용한 url parameter 제어

// <-- 코드 refactoring -->
// <-- videoRouter.get('/:id/edit', getEdit); -->
// <-- videoRouter.post('/:id/edit', postEdit); -->
// 하나의 url에서 get과 post가 동시에 일어나는 경우

export default videoRouter;
