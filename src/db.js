import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = error => console.log('❌ DB Error', error);

db.on('error', handleError); // 여러번 동작
db.once('open', handleOpen); // 한번만 동작
