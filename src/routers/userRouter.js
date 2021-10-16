import express from 'express';
import { edit, finishGithubLogin, logout, remove, see, startGithublogin } from './controllers/userController';

const userRouter = express.Router();

userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/remove', remove);
userRouter.get('/edit', edit);
userRouter.get('/github/start', startGithublogin);
// userRouter.get('/github/finish', finishGithubLogin);
userRouter.get(':id', see);

export default userRouter;
