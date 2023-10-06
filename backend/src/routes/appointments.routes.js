import express from 'express';
import {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
} from '../controllers/appointment.controller';
const router = express.Router();

// Rutas para citas
// Registrar una cita
router.post('/', createAppointment);
//Obtener todas las cita registradas
router.get('/', getAllAppointments);
//Obtener una cita por Id
router.get('/:appointmentId', getAppointmentById);

export default router;