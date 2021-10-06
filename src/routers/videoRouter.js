import express from 'express';
import { getEdit, getUpload, postEdit, postUpload, watch } from './controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch);
// videoRouter.get('/:id(\\d+)/edit', getEdit);
// videoRouter.post('/:id(\\d+)/edit', postEdit);
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;
