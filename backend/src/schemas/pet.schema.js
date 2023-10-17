import mongoose from 'mongoose';

// Define el esquema para Pet con anotaciones Swagger
const petSchemaDefinition = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    swagger: {
      type: 'string',
      description: 'Nombre de la mascota',
    },
  },
  specie: {
    type: String,
    required: true,
    swagger: {
      type: 'string',
      description: 'Tipo de mascota',
    },
  },
  sex: {
    type: String,
    required: true,
    swagger: {
      type: 'string',
      description: 'Sexo de la mascota',
    },
  },
  age: {
    type: Number,
    required: true,
    swagger: {
      type: 'number',
      description: 'Edad de la mascota',
    },
  },
  photo_url: {
    type: String,
    default: 'https://res.cloudinary.com/dxq0pypxu/image/upload/v1697477142/psxmvsqipxsqv9vtkrld.png',
    swagger: {
      type: 'string',
      description: 'URL de la imagen o foto de la mascota',
    },
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
    swagger: {
      type: 'string',
      description: 'ID del cliente dueño de la mascota',
    },
  },
});

// Crea el modelo Pet con el esquema definido
const Pet = mongoose.model('Pet', petSchemaDefinition);

export default Pet;
