import express from 'express';
import morgan from 'morgan';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

app.set('view engine', 'pug');
app.use(logger); //app.use는 항상 최상위 위치에 있어야함 global
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
