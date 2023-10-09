import { generateValidationRules } from '../config/expressValidator-config';

// Ejemplos de cómo definir reglas de validación específicas, que se usan en las rutas
export const uploadImageValidation = generateValidationRules('UploadImage', {
  image: {
    notEmptyFile: {},
    isImage: {},
  },
});

export const updateClientValidation = generateValidationRules('updateClient', {
  first_name: {
    notEmpty: {},
  },
  last_name: {
    notEmpty: {},
  },
  phone: {
    notEmpty: {},
    isLength: { min: 1, max: 15 },
  },
  address: {
    notEmpty: {},
  },
  photo_url: {
    notEmpty: {},
    isURL: {},
  },
});

export const registerClientValidation = generateValidationRules('registerClient', {
  email: {
    notEmpty: {},
    isEmail: {},
  },
  password: {
    notEmpty: {},
    isLength: { min: 8, max: 30 },
  },
});

export const deleteImageValidation = generateValidationRules('deleteImage', {
  publicId: {
    notEmpty: {},
  },
});

export const createAppointmentValidation = generateValidationRules('createAppointment', {
  date: {
    isDate: {},
  },
  reason: {
    notEmpty: {},
    isLength: { min: 0, max: 255 },
  },
  cost: {
    notEmpty: {},
    isFloat: {},
  },
  notes: {
    notEmpty: {},
    isLength: { min: 0, max: 255 },
  },
  clientId: {
    isMongoId: {},
  },
  petId: {
    isMongoId: {},
  },
});

export const updateAppointmentValidation = generateValidationRules('updateAppointment', {
  date: {
    isDate: {},
  },
  reason: {
    notEmpty: {},
    isLength: { min: 0, max: 255 },
  },
  cost: {
    notEmpty: {},
    isFloat: {},
  },
  notes: {
    notEmpty: {},
    isLength: { min: 0, max: 255 },
  }
});
