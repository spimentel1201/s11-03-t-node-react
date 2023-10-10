import express from 'express';
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from '../controllers/appointment.controller';
import { createAppointmentValidation, updateAppointmentValidation } from '../middlewares/validation.middleware';
import { validMongoId } from '../middlewares/validMongoId.middleware';

const router = express.Router();

router.param('appointmentId', validMongoId('appointmentId'));

// Rutas para citas
// Registrar una cita
router.post('/', createAppointmentValidation, createAppointment);
//Obtener todas las cita registradas
router.get('/', getAllAppointments);
//Obtener una cita por Id
router.get('/:appointmentId', getAppointmentById);
//Actualizar la información de una cita
router.put('/:appointmentId', updateAppointmentValidation, updateAppointment);
//Eliminar una cita
router.delete('/:appointmentId', deleteAppointment);

export default router;
