import { body, validationResult } from 'express-validator';

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

export const updateValidation = [
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

export const registerValidation = [
  body('email')
    .notEmpty()
    .withMessage('El campo email no puede estar vacío')
    .isEmail()
    .withMessage('El campo email debe ser una dirección de correo válida'),

  body('password')
    .notEmpty()
    .withMessage('El campo password no puede estar vacío')
    .isLength({ min: 8 })
    .withMessage('El campo password debe tener al menos 8 caracteres'),

  validFields,
];
