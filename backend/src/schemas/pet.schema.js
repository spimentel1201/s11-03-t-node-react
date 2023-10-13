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
  age: {
    type: Number,
    required: true,
    swagger: {
      type: 'number',
      description: 'Edad de la mascota',
    },
  },
  size: {
    type: Number,
    required: true,
    swagger: {
      type: 'number',
      description: 'Tamaño de la mascota',
    },
  },
  weight: {
    type: Number,
    required: true,
    swagger: {
      type: 'number',
      description: 'Peso de la mascota',
    },
  },
  suffering: {
    type: String,
    swagger: {
      type: 'string',
      description: 'Enfermedades o sufrimientos de la mascota',
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
