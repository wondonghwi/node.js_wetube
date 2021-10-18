import express from 'express';
import { deleteVideo, getEdit, getUpload, postEdit, postUpload, watch } from './controllers/videoController';
import { protectorMiddleware } from '../middlewares';

const videoRouter = express.Router();

videoRouter.get('/:id([0-9a-f]{24})', watch);
// videoRouter.get('/:id([0-9a-f]{24})/edit', getEdit);
// videoRouter.post('/:id([0-9a-f]{24})/edit', postEdit);
videoRouter.route('/:id([0-9a-f]{24})/edit').all(protectorMiddleware).get(getEdit).post(postEdit);
videoRouter.route('/:id([0-9a-f]{24})/delete').all(protectorMiddleware).get(deleteVideo);
videoRouter.route('/upload').all(protectorMiddleware).get(getUpload).post(postUpload);

export default videoRouter;
