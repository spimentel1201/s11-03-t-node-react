import express from 'express';
import clientRoutes from './client.routes';

const router = express.Router();

// Rutas de clientes
router.use('/api/v1/clients', clientRoutes);

// Otras rutas 

export default router;
