import mongoose from 'mongoose';

const clientSchemaDefinition = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  fullname: String,
  phone: String,
  address: String,
  photo_url: {
    type: String,
    default: 'https://res.cloudinary.com/dxq0pypxu/image/upload/v1696476957/nn12qmebo7v6qhbwbkdf.png',
  },
  isActive: { type: Boolean, default: true },
});

// Función toJSON personalizada para excluir campos sensibles
clientSchemaDefinition.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const Client = mongoose.model('Client', clientSchemaDefinition);

export default Client;
