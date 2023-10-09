import express from 'express';
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from '../controllers/appointment.controller';
import {
  createAppointmentsValidation,
  updateAppointmentsValidation,
  appointmentIdParamValidation,
} from '../middlewares/validation.middleware';

const router = express.Router();

// Rutas para citas
// Registrar una cita
router.post('/', createAppointmentsValidation, createAppointment);
//Obtener todas las cita registradas
router.get('/', getAllAppointments);
//Obtener una cita por Id
router.get('/:appointmentId', appointmentIdParamValidation, getAppointmentById);
//Actualizar la información de una cita
router.put('/:appointmentId', appointmentIdParamValidation, updateAppointmentsValidation, updateAppointment);
//Eliminar una cita
router.delete('/:appointmentId', appointmentIdParamValidation, deleteAppointment);

export default router;
