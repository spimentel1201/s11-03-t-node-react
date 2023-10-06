import express from 'express';
import {
    createAppointment,
} from '../controllers/appointment.controller';
const router = express.Router();

// Rutas para citas
// Registrar una cita
router.post('/', createAppointment);

export default router;