import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendResponse } from '../responses/responseUtils';
import Client from '../schemas/client.schema';
import ErrorApp from '../utils/ErrorApp';
import { tryCatch } from '../utils/tryCatch';

// Importa la duración del token desde .env
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION || '1h';

// Registrar un nuevo cliente
export const registerClient = tryCatch(async (req, res) => {
  const { fullname, email, password } = req.body;

  // Verifica si el correo electrónico ya existe en la base de datos
  const existingClient = await Client.findOne({ email });

  if (existingClient) {
    const error = ErrorApp('El correo electrónico ya está en uso', 409);
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
