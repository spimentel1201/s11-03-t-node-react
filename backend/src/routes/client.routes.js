import express from 'express';
import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from '../controllers/client.controller';
import { registerClientValidation, updateClientValidation } from '../middlewares/validation.middleware';

const router = express.Router();

// Rutas CRUD para clientes
router.post('/', registerClientValidation, createClient);
router.get('/', getAllClients);
router.get('/:clientId', getClientById);
router.put('/:clientId', updateClientValidation, updateClient);
router.delete('/:clientId', deleteClient);

export default router;
