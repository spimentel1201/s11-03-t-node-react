import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import {
  loginClientValidation,
  registerClientValidation,
  updatePasswordValidation,
} from '../middlewares/validation.middleware';
import {
  loginClient,
  registerClient,
  sendVerificationCode,
  updatePassword,
  verifyVerificationCode,
} from '../controllers/auth.controller';
import { sendResponse } from '../responses/responseUtils';
import { checkAuthentication } from '../middlewares/auth.middleware';

const router = express.Router();

// Ruta de inicio de sesión con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta de callback de Google después de la autenticación
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Lógica después de la autenticación exitosa
  const secretKey = process.env.SECRET_KEY;
  const clientId = req.client.clientId;

  // Crear un token JWT para el usuario
  const token = jwt.sign({ clientId }, secretKey, { expiresIn: process.env.TOKEN_EXPIRATION });

  // Devolver el token en un JSON de respuesta
  sendResponse(res, 200, 'Inicio de sesión exitoso', { token });
});

// Ruta de Inicio de sesion
router.post('/login', loginClientValidation, loginClient);

//Ruta de Registro
router.post('/register', registerClientValidation, registerClient);

// Ruta de recuperación de contraseña
router.post('/recovery-password', sendVerificationCode);

// Ruta para validar el código PIN
router.post('/validate-code', verifyVerificationCode);

// Aplica el middleware de autenticación a las rutas que deseas proteger
router.use(checkAuthentication);

// Ruta de Actualización de contraseña
router.post('/update-password', updatePasswordValidation, updatePassword);

export default router;
