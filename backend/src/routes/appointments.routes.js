import express from 'express';
import {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
} from '../controllers/appointment.controller';
const router = express.Router();

// Rutas para citas
// Registrar una cita
router.post('/', createAppointment);
//Obtener todas las cita registradas
router.get('/', getAllAppointments);
//Obtener una cita por Id
router.get('/:appointmentId', getAppointmentById);
//Actualizar la información de una cita
router.put('/:appointmentId', updateAppointment);

export default router;