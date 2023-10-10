import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { loginClientValidation, registerClientValidation } from '../middlewares/validation.middleware';
import { loginClient, registerClient } from '../controllers/auth.controller';
import { sendResponse } from '../responses/responseUtils';

const router = express.Router();

// Ruta de Inicio de sesion
router.post('/login', loginClientValidation, loginClient);

//Ruta de Registro
router.post('/register', registerClientValidation, registerClient);

// Ruta de inicio de sesión con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta de callback de Google después de la autenticación
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Lógica después de la autenticación exitosa
  const secretKey = process.env.SECRET_KEY;
  const clientId = req.client._id;

  // Crear un token JWT para el usuario
  const token = jwt.sign({ clientId }, secretKey, { expiresIn: process.env.TOKEN_EXPIRATION });

  // Devolver el token en un JSON de respuesta
  sendResponse(res, 200, 'Inicio de sesión exitoso', { token });
});

export default router;
