import express from 'express';
import clientRoutes from './client.routes';
import imageRoutes from './images.routes';
import petRoutes from './pet.routes';
import appointmentsRoutes from './appointments.routes';

const router = express.Router();

// Rutas de clientes
router.use('/api/v1/clients', clientRoutes);
// Rutas de Imagenes
router.use('/api/v1/images', imageRoutes);
// Rutas de mascotas
router.use('/api/v1/pets', petRoutes);
// Rutas de citas
router.use('/api/v1/appointments', appointmentsRoutes);
// Otras rutas

export default router;
