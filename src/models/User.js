import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  username: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
  location: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
});

//미들웨어 사용
userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = mongoose.model('User', userSchema);
export default User;
