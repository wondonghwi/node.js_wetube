import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

app.use(logger); //app.use는 항상 최상위 위치에 있어야함 global

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

const handleHome = (req, res) => res.send('Home');
globalRouter.get('/', handleHome);

const handleEditUsers = (req, res) => res.send('EditUsers');
userRouter.get('/edit', handleEditUsers);

const handleWatchVideo = (req, res) => res.send('WatchVideo');
videoRouter.get('/watch', handleWatchVideo);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
