import express from 'express';
import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from '../controllers/client.controller';
import { registerValidation, updateValidation } from '../middlewares/validation.middleware';

const router = express.Router();

// Rutas CRUD para clientes
router.post('/', registerValidation, createClient);
router.get('/', getAllClients);
router.get('/:clientId', getClientById);
router.put('/:clientId', updateValidation, updateClient);
router.delete('/:clientId', deleteClient);

export default router;
