import { sendResponse } from '../responses/responseUtils';
import { tryCatch } from '../utils/tryCatch';
import Client from '../schemas/client.schema';
import Pet from '../schemas/pet.schema';
import Appointment from '../schemas/appointment.schema';
import ErrorApp from '../utils/ErrorApp';
import disableEntity from '../utils/disableEntity';

// Crear una nueva cita
export const createAppointment = tryCatch(async (req, res) => {
  const { date, reason, cost, notes, petId, clientId } = req.body;

  // Verificar si el cliente que se asociara a la cita existe en DB.
  const existingClient = await Client.findById(clientId);

  if (!existingClient) {
    const error = ErrorApp(`Cliente no encontrado`, 404);
    throw error;
  }

  // Verificar si la mascota que se asociara a la cita existe en DB.
  const existingPet = await Pet.findById(petId);

  if (!existingPet) {
    const error = ErrorApp(`Mascota no encontrada`, 404);
    throw error;
  }

  const newAppointment = new Appointment({
    date,
    reason,
    cost,
    notes,
    petId,
    clientId,
  });

  // Guarda una nueva cita en la base de datos
  await newAppointment.save();

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 201, 'Cita creada con éxito', newAppointment);
});

// Obtener todas las citas
export const getAllAppointments = tryCatch(async (req, res) => {
  const appointments = await Appointment.find().populate([
    { path: 'clientId', select: '-password' },
    { path: 'petId' },
  ]);

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Citas encontradas con éxito', appointments);
});

// Obtener una cita por ID
export const getAppointmentById = tryCatch(async (req, res) => {
  const { appointmentId } = req.params;
  const appointment = await Appointment.findById(appointmentId).populate('clientId', '-password').populate('petId');

  if (!appointment) {
    const error = ErrorApp(`Cita no encontrado`, 404);
    throw error;
  }

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Cita encontrada con éxito', appointment);
});

// Actualizar una cita por ID
export const updateAppointment = tryCatch(async (req, res) => {
  const { appointmentId } = req.params;
  const { ...updateFields } = req.body;

  const appointment = await Appointment.findById(appointmentId);

  // Verificar si la cita existe en DB.
  if (!appointment) {
    const error = ErrorApp(`Cita no encontrada`, 404);
    throw error;
  }

  // Verifica si la cita está activa antes de permitir la actualización
  if (!appointment.isActive) {
    const error = ErrorApp('No se puede actualizar una cita inactiva', 404);
    throw error;
  }

  const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, { $set: updateFields }, { new: true });

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Cita actualizada con éxito', updatedAppointment);
});

// Eliminar una cita por ID
export const deleteAppointment = tryCatch(async (req, res) => {
  const { appointmentId } = req.params;

  await disableEntity(Appointment, appointmentId, 'Cita');

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Cita desactivada con éxito');
});
