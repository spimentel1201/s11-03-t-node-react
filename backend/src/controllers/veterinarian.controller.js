import { paginate } from '../utils/pagination';
import { sendResponse } from '../responses/responseUtils';
import { tryCatch } from '../utils/tryCatch';
import Veterinarian from '../schemas/veterinarian.schema';
import disableEntity from '../utils/disableEntity';
import ErrorApp from '../utils/ErrorApp';

// Registrar un nuevo veterinario
export const createVeterinarian = async (req, res) => {
  const { first_name, last_name, speciality, phone, license } = req.body;

  const newVeterinarian = new Veterinarian({
    first_name,
    last_name,
    speciality,
    phone,
    license,
  });

  // Guarda una nueva cita en la base de datos
  await newVeterinarian.save();
  sendResponse(res, 201, 'Se registró el veterinario con éxito', newVeterinarian);
};

// Obtener todos los veterinarios registrados
export const getAllVeterinarians = tryCatch(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10; // Límite 10 por defecto
  const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}`;

  const response = await paginate(Veterinarian, page, limit, baseUrl);

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Veterinarios encontrados con éxito', response);
});

// Obtener un veterinario por ID
export const getVeterinarianById = tryCatch(async (req, res) => {
  const { veterinarianId } = req.params;

  const veterinarian = await Veterinarian.findById(veterinarianId);

  if (!veterinarian) {
    const error = ErrorApp(`El veterinario no fué encontrado`, 404);
    throw error;
  }

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Veterinario encontrado con éxito', veterinarian);
});

// Actualizar un veterinario por ID
export const updateVeterinarian = tryCatch(async (req, res) => {
  const { veterinarianId } = req.params;
  const { ...updateFields } = req.body;

  const veterinarian = await Veterinarian.findById(veterinarianId);

  // Verifica si el veterinario existe

  if (!veterinarian) {
    const error = ErrorApp(`Veterinario no encontrado`, 404);
    throw error;
  }

  // Verifica si el veterinario está activo antes de permitir la actualización
  if (!veterinarian.isActive) {
    const error = ErrorApp('No se puede actualizar un veterinario inactivo', 404);
    throw error;
  }
  // TODO -> Verificar si envía un archivo con la imagen de perfil del veterinario

  // Actualiza los campos si el veterinario se encuentra activo
  const updatedVeterinarian = await Veterinarian.findByIdAndUpdate(
    veterinarianId,
    { $set: updateFields },
    { new: true },
  );

  // Devuelve una respuesta RESTful desde utils
  sendResponse(res, 200, 'Veterinario actualizado con éxito', updatedVeterinarian);
});

// Desactivar un veterinario por ID
export const deleteVeterinarian = tryCatch(async (req, res) => {
  const { veterinarianId } = req.params;

  // Llama a la función útil disableEntity con los tres parametros
  await disableEntity(Veterinarian, veterinarianId, 'Veterinarian');

  sendResponse(res, 200, 'Veterinario inhabilitado con éxito');
});
