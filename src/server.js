import express from 'express';

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send('study');
};

app.get('/', handleHome);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);