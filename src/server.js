import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

const handleHome = (req, res) => {
  return res.send('home');
};

const handleLogin = (req, res) => {
  return res.send('login');
};

app.use(logger); //app.use는 항상 최상위 위치에 있어야함 global
app.get('/', handleHome);
app.get('/login', handleLogin);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
