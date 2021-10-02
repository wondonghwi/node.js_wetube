import express from 'express';

const userRouter = express.Router();

const handleEditUsers = (req, res) => res.send('EditUsers');
userRouter.get('/edit', handleEditUsers);

export default userRouter;
