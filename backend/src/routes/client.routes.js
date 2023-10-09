import express from 'express';
import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from '../controllers/client.controller';
import { registerClientValidation, updateClientValidation } from '../middlewares/validation.middleware';
import { validMongoId } from '../middlewares/validMongoId.middleware';

const router = express.Router();

// Middleware para todas las rutas de cliente que requieren un cliente por ID
router.param('clientId', validMongoId('clientId'));
// Rutas CRUD para clientes
router.post('/', registerClientValidation, createClient);
router.get('/', getAllClients);
router.get('/:clientId', getClientById);
router.put('/:clientId', updateClientValidation, updateClient);
router.delete('/:clientId', deleteClient);

export default router;
