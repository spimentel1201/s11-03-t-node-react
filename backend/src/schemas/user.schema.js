import mongoose from 'mongoose';

const userSchemaDefinition = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchemaDefinition);

export default User;
