import express from 'express';
import { createPet, deletePet, getAllPets, getPetById, updatePet } from '../controllers/pet.controller';
import { checkAuthentication } from '../middlewares/auth.middleware';
import { validMongoId } from '../middlewares/validMongoId.middleware';
import { createPetValidation, updatePetValidation } from '../middlewares/validation.middleware';

const router = express.Router();

// Middleware para todas las rutas de mascotas que requieren una mascota por ID
router.param('petId', validMongoId('petId'));

// Registrar una mascota
router.post('/', checkAuthentication, createPetValidation, createPet);
//Obtener todas las mascotas registradas
router.get('/', getAllPets);
//Obtener una mascota por Id
router.get('/:petId', checkAuthentication, getPetById);
//Actualizar la información de una mascota
router.put('/:petId', checkAuthentication, updatePetValidation, updatePet);
//Desactivar una mascota mascota
router.delete('/:petId', checkAuthentication, deletePet);

export default router;