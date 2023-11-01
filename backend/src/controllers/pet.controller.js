import Pet from '../schemas/pet.schema';
import Client from '../schemas/client.schema';
import Appointment from '../schemas/appointment.schema';
import Image from '../schemas/image.schema';
import { sendResponse } from '../responses/responseUtils';
import ErrorApp from '../utils/ErrorApp';
import { tryCatch } from '../utils/tryCatch';
import mongoose from 'mongoose';
import { paginate } from '../utils/pagination';
import disableEntity from '../utils/disableEntity';
import cloudinary from '../config/cloudinary-config';

// Crear un nuevo mascota
export const createPet = tryCatch(async(req, res) => {
    const { name, specie, sex, age, photo_url } = req.body;
    const clientId = req.client.clientId;

    // Verificar si el cliente o usuario dueño de la mascota existe
    const existingClient = await Client.findById(clientId);

    if (!existingClient) {
        const error = ErrorApp(`El cliente no existe`, 404);
        throw error;
    }

    const newPet = new Pet({
        name,
        specie,
        sex,
        age,
        photo_url,
        clientId,
    });

    // Guarda una nueva mascota en la base de datos
    await newPet.save();
    sendResponse(res, 201, 'Mascota registrada con éxito', newPet);
});
// Obtener todas las mascotas
export const getAllPets = tryCatch(async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; // Límite 10 por defecto
    const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}`;

    // Usa la función paginate para obtener los resultados paginados
    const response = await paginate(Pet, page, limit, baseUrl);

    // Agrega la información del dueño de cada mascota en la respuesta
    response.results = await Pet.populate(response.results, { path: 'clientId', select: '-password' });

    sendResponse(res, 200, 'Mascotas encontradas con éxito', response);
});

// Obtener una mascota por ID junto a su historial de citas
export const getPetById = tryCatch(async(req, res) => {
    const { petId } = req.params;
    const response = {};
    const pet = await Pet.findById({ _id: petId });
    if (!response || response.length === 0) {
        const error = ErrorApp(`Mascota no encontrada`, 404);
        throw error;
    }
    response.pet = pet;
    // Obtiene las citas asociadas a la mascota
    const appointmentss = await Appointment.find({ petId: petId }).populate('veterinarianId');
    if (!appointmentss || appointmentss === 0) {
        const error = ErrorApp(`La mascota aún no registra citas`, 404);
        throw error;
    }
    response.appointmentss = appointmentss;
    // Calcula la cantidad de citas y agrega el campo al objeto de respuesta
    response.appointmentCount = response.appointmentss.length;
    // Si la consulta devuelve resultados, entonces la mascota se encontró con éxito
    sendResponse(res, 200, 'Mascota encontrada con éxito', response);
});

// Actualizar datos de una mascota por ID
export const updatePet = tryCatch(async(req, res) => {
    const { petId } = req.params;
    const {...updateFields } = req.body;

    const pet = await Pet.findById(petId);

    if (!pet) {
        const error = ErrorApp(`Mascota no encontrada`, 404);
        throw error;
    }
    const updatedPet = await Pet.findByIdAndUpdate(petId, { $set: updateFields }, { new: true });
    sendResponse(res, 200, 'Datos de la mascota actualizados con éxito', updatedPet);
});

// Desactivar una mascota por ID
export const deletePet = tryCatch(async(req, res) => {
    const { petId } = req.params;

    const pet = await Pet.findById(petId);
    // Se obtiene la imagen asociada a la mascota a través de su foto
    const petImage = await Image.findOne({
        photo_url: pet.photo_url
    });
    const imageId = petImage._id;
    const publicId = petImage.public_id;
    // Se elimina la imagen de la base de datos
    await Image.findByIdAndRemove(imageId);
    // Se borra la imagen del servidor
    await cloudinary.uploader.destroy(publicId);
    // Se desactiva la mascota
    await disableEntity(Pet, petId, 'Pet');

    sendResponse(res, 200, 'Mascota inhabilitada con éxito');
});