import mongoose from 'mongoose';

const clientSchemaDefinition = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  first_name: { type: String, default: 'John' },
  last_name: { type: String, default: 'Doe' },
  phone: { type: String, default: '555-123-4567' },
  address: { type: String, default: '123 Main Street' },
  photo_url: { type: String, default: 'https://i.ibb.co/Zgq29Gy/profile.png' },
  isActive: { type: Boolean, default: true },
});

const Client = mongoose.model('Client', clientSchemaDefinition);

export default Client;
