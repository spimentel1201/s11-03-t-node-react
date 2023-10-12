import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendResponse } from '../responses/responseUtils';
import Client from '../schemas/client.schema';
import ErrorApp from '../utils/ErrorApp';
import { tryCatch } from '../utils/tryCatch';
import transporter from '../config/node-mailer';
import { generateVerificationCode } from '../utils/generateVerificationCode';

// Importa la duración del token desde .env
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION || '1h';

// Registrar un nuevo cliente
export const registerClient = tryCatch(async (req, res) => {
  const { fullname, email, password } = req.body;

  // Verifica si el correo electrónico ya existe en la base de datos
  const existingClient = await Client.findOne({ email });

  if (existingClient) {
    const error = ErrorApp('El correo electrónico ya está en uso', 400);
    throw error;
  }

  const saltRounds = 10; // Número de rondas de saltos para la encriptación

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newClient = new Client({
    fullname,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  await newClient.save();

  const secretKey = process.env.SECRET_KEY;

  // Crea un token JWT con la información del cliente
  const token = jwt.sign({ clientId: newClient._id }, secretKey, { expiresIn: TOKEN_EXPIRATION });

  sendResponse(res, 201, 'Cliente creado con éxito', { token });
});

export const loginClient = tryCatch(async (req, res) => {
  const { email, password } = req.body;

  // Buscar al cliente por su correo electrónico
  const existingClient = await Client.findOne({ email });

  if (!existingClient) {
    const error = ErrorApp('Credenciales incorrectas', 401);
    throw error;
  }

  // Verificar la contraseña
  const isPasswordValid = await bcrypt.compare(password, existingClient.password);

  if (!isPasswordValid) {
    const error = ErrorApp('Credenciales incorrectas', 401);
    throw error;
  }

  // Las credenciales son válidas, generar un token JWT
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign({ clientId: existingClient._id }, secretKey, { expiresIn: TOKEN_EXPIRATION });

  // Devolver el token en la respuesta RESTful
  sendResponse(res, 200, 'Inicio de sesión exitoso', { token });
});

export const sendVerificationCode = tryCatch(async (req, res) => {
  const { email } = req.body;

  // Genera un código de verificación temporal
  const recoveryCode = generateVerificationCode();

  console.log('Código de verificación generado:', recoveryCode);

  // Almacena el código de verificación en la base de datos del cliente
  const existingClient = await Client.findOne({ email });

  if (!existingClient) {
    const error = ErrorApp('Tus datos no son válidos, por favor vuelve a intentarlo', 404);
    throw error;
  }

  // Almacena el código de verificación en el cliente
  existingClient.verificationCode = recoveryCode;

  // Establece la fecha de expiración del código en 5 minutos desde su generación
  const codeExpiration = new Date();
  codeExpiration.setMinutes(codeExpiration.getMinutes() + 5);
  existingClient.verificationCodeExpires = codeExpiration;

  console.log('Código de verificación asignado al cliente:', existingClient.verificationCode);

  // Guarda los cambios en la entidad Client
  await existingClient.save();

  console.log('Cambios guardados en la entidad del cliente:', existingClient);

  // Envía el correo de recuperación con el código de verificación
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: 'Recuperación de contraseña',
    text: `Utiliza el siguiente código para recuperar tu contraseña: ${recoveryCode}`,
  };

  // Envía el correo de recuperación
  await transporter.sendMail(mailOptions);

  // Respondemos con un mensaje de éxito
  sendResponse(res, 200, `Se ha enviado un código de verificación. Por favor, verifica tu bandeja de entrada.`);
});

export const verifyVerificationCode = tryCatch(async (req, res) => {
  const { code } = req.body;

  // Buscar al cliente por su código de verificación
  const existingClient = await Client.findOne({ verificationCode: code });

  if (!existingClient) {
    const error = ErrorApp('Código de verificación no válido', 404);
    throw error;
  }

  // Comprobar si el código de verificación coincide
  if (existingClient.verificationCode === code) {
    // El código de verificación es válido, permitir continuar
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ clientId: existingClient._id }, secretKey, {
      expiresIn: '5m', // Duración del token temporal
    });

    // Elimina el código de verificación de la base de datos
    existingClient.verificationCode = undefined;

    // Guarda los cambios en la entidad Client para eliminar el código
    await existingClient.save();

    sendResponse(res, 200, 'Código de verificación válido. Puede actualizar su contraseña.', { token });
  } else {
    const error = ErrorApp('Código de verificación no válido', 400);
    throw error;
  }
});

export const updatePassword = tryCatch(async (req, res) => {
  const { newPassword } = req.body;

  // Actualiza la contraseña
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

  // Accede al ID del cliente autenticado a través del token
  const clientId = req.client.clientId;

  // Encuentra al cliente en la base de datos por su ID
  const existingClient = await Client.findOne({ _id: clientId });

  if (!existingClient) {
    const error = ErrorApp('Usuario no encontrado', 404);
    throw error;
  }

  // Actualiza la contraseña en la entidad del cliente
  existingClient.password = hashedPassword;

  // Elimina el campo verificationCode si es necesario
  if (existingClient.verificationCode) {
    delete existingClient.verificationCode;
  }

  // Guarda los cambios en la entidad del cliente
  await existingClient.save();

  // Envía una respuesta de éxito
  sendResponse(res, 200, 'Contraseña actualizada con éxito');
});
