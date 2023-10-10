import { generateValidationRules } from '../config/expressValidator-config';

// Ejemplos de cómo definir reglas de validación específicas, que se usan en las rutas
export const uploadImageValidation = generateValidationRules('UploadImage', {
    image: {
        notEmptyFile: {},
        isImage: {},
    },
});

export const updateClientValidation = generateValidationRules('updateClient', {
    fullname: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
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
    fullname: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    email: {
        notEmpty: {},
        isEmail: {},
    },
    password: {
        notEmpty: {},
        isLength: { min: 8, max: 12 },
        password: {},
    },
});

export const loginClientValidation = generateValidationRules('loginClient', {
    email: {
        notEmpty: {},
        isEmail: {},
    },
    password: {
        notEmpty: {},
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
    },
});

export const createVeterinarianValidation = generateValidationRules('createVeterinarian', {

    first_name: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    last_name: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    speciality: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    phone: {
        notEmpty: {},
        isLength: { min: 1, max: 15 },
    },
    license: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    photo_url: {
        notEmpty: {},
        isURL: {},
    },
});

export const updateVeterinarianValidation = generateValidationRules('updateVeterinarian', {
    first_name: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    last_name: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    speciality: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    phone: {
        notEmpty: {},
        isLength: { min: 1, max: 15 },
    },
    license: {
        notEmpty: {},
        isLength: { min: 5, max: 40 },
        OnlyLetters: {},
    },
    photo_url: {
        notEmpty: {},
        isURL: {},
    },
});