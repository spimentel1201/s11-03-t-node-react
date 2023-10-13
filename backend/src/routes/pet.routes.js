import express from 'express';
import { createPet, getAllPets, getPetById, updatePet } from '../controllers/pet.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

// Rutas para mascotas
// Registrar una mascota
router.post('/', authenticate, createPet);
//Obtener todas las mascotas registradas
router.get('/', authenticate, getAllPets);
//Obtener una mascota por Id
router.get('/:petId', authenticate, getPetById);
//Actualizar la información de una mascota
router.put('/:petId', authenticate, updatePet);

export default router;