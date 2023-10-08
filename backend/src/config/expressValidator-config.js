import { body, validationResult } from 'express-validator';

export const validFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      field: error.param,
      message: error.msg,
    }));
    return res.status(400).json({
      status: 'fail',
      errors: errorMessages,
    });
  }
  next();
};

// Función para generar reglas de validación dinámica.
export const generateValidationRules = (entityName, fields) => {
  const validationArray = [];

  for (const fieldName in fields) {
    if (Object.hasOwnProperty.call(fields, fieldName)) {
      const fieldConfig = fields[fieldName];

      for (const ruleName in fieldConfig) {
        if (Object.hasOwnProperty.call(fieldConfig, ruleName)) {
          const ruleOptions = fieldConfig[ruleName];
          const validatorFn = validationConfig[ruleName].validator(fieldName, ruleOptions);
          const errorMessageFn = validationConfig[ruleName].errorMessage(fieldName, ruleOptions);
          validationArray.push(validatorFn.withMessage(errorMessageFn));
        }
      }
    }
  }

  validationArray.push(validFields);

  return validationArray;
};

export const validationConfig = {
  //Reglas Nativas de Express
  notEmpty: {
    validator: (fieldName) => body(fieldName).notEmpty(),
    errorMessage: (fieldName) => `El campo ${fieldName} no puede estar vacío`,
  },
  isLength: {
    validator: (fieldName, options) => body(fieldName).isLength(options),
    errorMessage: (fieldName, options) =>
      `El campo ${fieldName} debe tener entre ${options.min} y ${options.max} caracteres`,
  },
  isEmail: {
    validator: (fieldName) => body(fieldName).isEmail(),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser una dirección de correo válida`,
  },
  isURL: {
    validator: (fieldName) => body(fieldName).isURL(),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser una URL válida.`,
  },
  isNumeric: {
    validator: (fieldName) => body(fieldName).isNumeric(),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser un número`,
  },
  isInt: {
    validator: (fieldName) => body(fieldName).isInt(),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser un número entero`,
  },
  isFloat: {
    validator: (fieldName) => body(fieldName).isFloat(),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser un número decimal`,
  },
  isBoolean: {
    validator: (fieldName) => body(fieldName).isBoolean(),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser un valor booleano (true o false)`,
  },
  isDate: {
    validator: (fieldName) => body(fieldName).isDate(),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser una fecha válida`,
  },
  isAfter: {
    validator: (fieldName, date) => body(fieldName).isAfter(date),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser una fecha posterior a la fecha proporcionada`,
  },
  isBefore: {
    validator: (fieldName, date) => body(fieldName).isBefore(date),
    errorMessage: (fieldName) => `El campo ${fieldName} debe ser una fecha anterior a la fecha proporcionada`,
  },

  // Agrega más reglas de validación nativas aquí...

  //Reglas Personalizadas

  notEmptyFile: {
    validator: (fieldName) =>
      body(fieldName).custom((value, { req }) => {
        if (!req.file) {
          throw new Error(`El campo ${fieldName} no puede estar vacío.`);
        }
        return true;
      }),
    errorMessage: (fieldName) => `El campo ${fieldName} no puede estar vacío.`,
  },
  isImage: {
    validator: (fieldName) =>
      body(fieldName).custom((value, { req }) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (req.file) {
          if (!allowedMimeTypes.includes(req.file.mimetype)) {
            throw new Error(`El archivo en el campo ${fieldName} debe ser una imagen (JPEG o PNG).`);
          }
        }
        return true;
      }),
    errorMessage: (fieldName) => `El archivo en el campo ${fieldName} debe ser una imagen (JPEG o PNG).`,
  },

  // Agrega más reglas de validación personalizadas aquí...
};
