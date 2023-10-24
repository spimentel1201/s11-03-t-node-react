import { generateEmailContent } from '../utils/generateEmailContent';
import disableEntity from '../utils/disableEntity';
import { paginate } from '../utils/pagination';
import { tryCatch } from '../utils/tryCatch';
import ErrorApp from '../utils/ErrorApp';

import { sendResponse } from '../responses/responseUtils';
import { sendEmail } from '../services/sendEmail';

import Appointment from '../schemas/appointment.schema';
import Client from '../schemas/client.schema';
import Pet from '../schemas/pet.schema';
import Veterinarian from '../schemas/veterinarian.schema';

// Crear una nueva cita
export const createAppointment = tryCatch(async (req, res) => {
  const { date, start_time, end_time, reason, notes, petId, veterinarianId } = req.body;
  const clientId = req.client.clientId;

  // Verifica la existencia de cliente, mascota y veterinario en paralelo
  const [existingClient, existingPet, existingVeterinarian] = await Promise.all([
    Client.findById(clientId),
    Pet.findById(petId),
    Veterinarian.findById(veterinarianId),
  ]);

  if (!existingClient) {
    throw ErrorApp('Cliente no encontrado', 404);
  }
  if (!existingPet) {
    throw ErrorApp('Mascota no encontrada', 404);
  }
  if (!existingVeterinarian) {
    throw ErrorApp('Veterinario no encontrado', 404);
  }

  if (!existingPet.isActive) {
    throw ErrorApp('La mascota está inactiva, no se puede crear la cita', 400);
  }
  // Validar si el veterinario está activo
  if (!existingVeterinarian.isActive) {
    throw ErrorApp('El veterinario está inactivo, no se puede crear la cita', 400);
  }

  // Crea la nueva cita
  const newAppointment = new Appointment({
    date: new Date(date),
    start_time: new Date(start_time),
    end_time: new Date(end_time),
    reason,
    notes,
    petId,
    clientId,
    veterinarianId,
  });

  // Guarda la nueva cita en la base de datos
  await newAppointment.save();

  // Define las variables para la plantilla de correo
  const templateVariables = {
    'Nombre de Mascota': existingPet.name,
    'Nombre del Cliente': existingClient.fullname,
    'Nombre del Veterinario': existingVeterinarian.fullname,
    'Fecha de Cita': new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }),
    'Hora de Inicio': new Date(start_time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    }),
    'Motivo de Cita': reason,
  };

  // Genera el contenido del correo dinámicamente, pasa como parametro la plantilla y las variables
  const emailContent = generateEmailContent('appointment_confirmation', templateVariables);

  // Envía el correo de confirmación de la cita al cliente utilizando la función sendEmail
  const emailSubject = 'Confirmación de Cita';
  await sendEmail(existingClient.email, emailSubject, emailContent);

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 201, 'Cita creada con éxito', newAppointment);
});

// Obtener todas las citas con filtros opcionales y paginación
export const getAllAppointments = tryCatch(async (req, res) => {
  // Obtiene los parámetros de consulta (query parameters) de la solicitud, incluyendo la página y el límite
  const { clientId, petId, veterinarianId, date, isActive, search } = req.query;

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}`;

  // Crea un objeto de filtro inicial vacío
  const filter = {};

  // Agrega filtros si se proporcionan los parámetros
  if (clientId) {
    filter.clientId = clientId;
  }
  if (petId) {
    filter.petId = petId;
  }
  if (veterinarianId) {
    filter.veterinarianId = veterinarianId;
  }
  if (date) {
    filter.date = new Date(date);
  }
  if (isActive) {
    filter.isActive = isActive;
  }

  // Realiza la consulta sin paginación para contar los resultados
  let totalResults;
  let results;

  if (search) {
    // Si se proporciona una palabra clave de búsqueda, busca en varios campos
    results = await Appointment.find({
      $or: [{ reason: { $regex: search, $options: 'i' } }, { notes: { $regex: search, $options: 'i' } }],
    }).sort({ date: -1 }); // Ordena por fecha en orden descendente (más recientes primero);
  } else {
    results = await Appointment.find(filter).sort({ date: -1 }); // Ordena por fecha en orden descendente (más recientes primero);
  }

  // Calcula el número total de resultados
  totalResults = results.length;

  if (totalResults > limit) {
    // Si el número de resultados es mayor que el límite, aplica paginación
    results = await paginate(Appointment, page, limit, baseUrl, filter);
  }

  // Devuelve una respuesta RESTful desde utils con la cantidad total de resultados
  sendResponse(res, 200, 'Citas encontradas con éxito', { totalResults, results });
});

// Obtener una cita por ID
export const getAppointmentById = tryCatch(async (req, res) => {
  const { appointmentId } = req.params;
  const appointment = await Appointment.findById(appointmentId)
    .populate('clientId')
    .populate('petId')
    .populate('veterinarianId');

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
  const { date, start_time, end_time, reason, notes, petId, veterinarianId } = req.body;

  const clientId = req.client.clientId;

  // Verificar si la cita existe en DB.
  const appointment = await Appointment.findById(appointmentId).populate('petId').populate('veterinarianId');
  if (!appointment) {
    throw ErrorApp(`Cita no encontrada`, 404);
  }

  // Verifica si la cita está activa antes de permitir la actualización
  if (!appointment.isActive) {
    throw ErrorApp('No se puede actualizar una cita inactiva', 400);
  }

  // Verificar la existencia del cliente, mascota y veterinario
  const [client, pet, veterinarian] = await Promise.all([
    Client.findById(clientId),
    Pet.findById(petId),
    Veterinarian.findById(veterinarianId),
  ]);

  if (!client) {
    throw ErrorApp('Cliente no encontrado', 404);
  }
  if (!pet) {
    throw ErrorApp('Mascota no encontrada', 404);
  }
  if (!veterinarian) {
    throw ErrorApp('Veterinario no encontrado', 404);
  }

  if (!pet.isActive) {
    throw ErrorApp('La mascota está inactiva, no se puede crear la cita', 400);
  }
  // Validar si el veterinario está activo
  if (!veterinarian.isActive) {
    throw ErrorApp('El veterinario está inactivo, no se puede crear la cita', 400);
  }

  // Actualiza la cita
  const updatedAppointment = await Appointment.findByIdAndUpdate(
    appointmentId,
    {
      date: new Date(date),
      start_time: new Date(start_time),
      end_time: new Date(end_time),
      reason,
      notes,
      petId,
      clientId,
      veterinarianId,
    },
    { new: true },
  );

  // Guarda el nombre del cliente, mascota y veterinario en variables
  const clientFullname = client.fullname;
  const petName = pet.name;
  const veterinarianName = veterinarian.fullname;

  // Define las variables para la plantilla de correo
  const templateVariables = {
    'Nombre de Mascota': petName,
    'Nombre del Cliente': clientFullname,
    'Nombre del Veterinario': veterinarianName,
    'Fecha de Cita': new Date(updatedAppointment.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }),
    'Hora de Inicio': new Date(updatedAppointment.start_time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    }),
    'Motivo de Cita': updatedAppointment.reason,
  };

  // Genera el contenido del correo dinámicamente, pasa como parámetro la plantilla y las variables
  const emailContent = generateEmailContent('appointment_update', templateVariables);

  // Envía el correo de confirmación de que la cita fue actualizada con la función sendEmail
  const emailSubject = 'Actualización de Cita';
  await sendEmail(client.email, emailSubject, emailContent);

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Cita actualizada con éxito', updatedAppointment);
});

// Desactivar una cita por ID
export const deleteAppointment = tryCatch(async (req, res) => {
  const { appointmentId } = req.params;

  // Verifica la existencia de cliente, mascota y veterinario
  const existingAppointment = await Appointment.findById(appointmentId).populate('veterinarianId').populate('clientId');
  if (!existingAppointment) {
    throw ErrorApp('Cita no encontrada', 404);
  }

  const clientFullname = existingAppointment.clientId.fullname;
  const veterinarianFullname = existingAppointment.veterinarianId.fullname;

  // Define las variables para la plantilla de correo
  const templateVariables = {
    'Nombre del Cliente': clientFullname,
    'Nombre del Veterinario': veterinarianFullname,
    'Fecha de Cita': new Date(existingAppointment.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }),
    'Hora de Inicio': new Date(existingAppointment.start_time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    }),
    'Motivo de Cita': existingAppointment.reason,
  };

  // Genera el contenido del correo dinámicamente
  const emailContent = generateEmailContent('appointment_cancellation', templateVariables);

  // Envía el correo de confirmación de que la cita fue cancelada con la función sendEmail
  const emailSubject = 'Cancelación de Cita';
  await sendEmail(existingAppointment.clientId.email, emailSubject, emailContent);
  // Desactiva la Cita
  await disableEntity(Appointment, appointmentId, 'Cita');

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Cita desactivada con éxito');
});
