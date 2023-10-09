import { body, param, validationResult } from 'express-validator';

export const validFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      campo: error.param,
      mensaje: error.msg,
    }));
    return res.status(400).json({
      status: 'error',
      errors: errorMessages,
    });
  }
  next();
};

export const ClientValidation = [
  body('first_name')
    .notEmpty()
    .withMessage('El campo first_name no puede estar vacío')
    .isLength({ max: 255 })
    .withMessage('El campo first_name no puede exceder los 255 caracteres'),
  body('last_name')
    .notEmpty()
    .withMessage('El campo last_name no puede estar vacío')
    .isLength({ max: 255 })
    .withMessage('El campo last_name no puede exceder los 255 caracteres'),
  body('phone')
    .notEmpty()
    .withMessage('El campo phone no puede estar vacío')
    .isLength({ max: 15 })
    .withMessage('El campo phone no puede exceder los 15 caracteres'),
  body('address')
    .notEmpty()
    .withMessage('El campo address no puede estar vacío')
    .isLength({ max: 255 })
    .withMessage('El campo address no puede exceder los 255 caracteres'),
  body('photo_url')
    .notEmpty()
    .withMessage('El campo photo_url no puede estar vacío')
    .isURL({ protocols: ['http', 'https'], require_tld: true, require_protocol: true })
    .withMessage('El campo photo_url debe ser una URL válida con http o https'),
  validFields,
];

export const createAppointmentsValidation = [
  body('date')
    .isISO8601()
    .toDate()
    .withMessage('El campo date debe ser una fecha ISO 8601'),
  body('reason')
    .notEmpty()
    .withMessage('El campo reason no puede estar vacío')
    .isString()
    .withMessage('El campo reason debe ser un string')
    .isLength({ max: 255 })
    .withMessage('El campo reason no puede exceder los 255 caracteres'),
  body('cost')
    .notEmpty()
    .withMessage('El campo cost no puede estar vacío')
    .isFloat({ min: 0 })
    .withMessage('El campo cost debe ser un número igual/mayor a 0'),
  body('notes')
    .notEmpty()
    .withMessage('El campo notes no puede estar vacío')
    .isString()
    .withMessage('El campo notes debe ser un string')
    .isLength({ max: 255 })
    .withMessage('El campo notes no puede exceder los 255 caracteres'),
  body('clientId')
    .isMongoId()
    .withMessage(
      `El campo clientId debe ser un ID válido de MongoDB en formato hexadecimal de 24 caracteres`,
    ),
  body('petId')
    .isMongoId()
    .withMessage(
      `El campo petId debe ser un ID válido de MongoDB en formato hexadecimal de 24 caracteres`,
    ),
  validFields,
];

export const appointmentIdParamValidation = [
  param("appointmentId")
    .isMongoId()
    .withMessage(
      `El parametro appointmentId debe ser un ID válido de MongoDB en formato hexadecimal de 24 caracteres`,
    ),
  validFields,
];

export const updateAppointmentsValidation = [
  body('date')
    .isISO8601()
    .toDate()
    .withMessage('El campo date debe ser una fecha ISO 8601'),
  body('reason')
    .notEmpty()
    .withMessage('El campo reason no puede estar vacío')
    .isString()
    .withMessage('El campo reason debe ser un string')
    .isLength({ max: 255 })
    .withMessage('El campo reason no puede exceder los 255 caracteres'),
  body('cost')
    .notEmpty()
    .withMessage('El campo cost no puede estar vacío')
    .isFloat({ min: 0 })
    .withMessage('El campo cost debe ser un número igual/mayor a 0'),
  body('notes')
    .notEmpty()
    .withMessage('El campo notes no puede estar vacío')
    .isString()
    .withMessage('El campo notes debe ser un string')
    .isLength({ max: 255 })
    .withMessage('El campo notes no puede exceder los 255 caracteres'),
  validFields,
];