import Pet from '../schemas/pet.schema';
import Client from '../schemas/client.schema';
import { sendResponse } from '../responses/responseUtils';
import ErrorApp from '../utils/ErrorApp';

// Crear un nuevo mascota
export const createPet = async(req, res) => {
    const { name, age, size, weight, suffering, clientId } = req.body;

    // Verificar si el cliente o usuario dueño de la mascota existe
    const existingClient = await Client.findById(clientId);

    if (!existingClient) {
        const error = ErrorApp(`El cliente no existe`, 404);
        throw error;
    }

    const newPet = new Pet({
        name,
        age,
        size,
        weight,
        suffering,
        clientId,
    });

    // Guarda una nueva mascota en la base de datos
    await newPet.save();
    sendResponse(res, 201, 'Mascota registrada con éxito', newPet);
};

// Obtener todas las mascotas
export const getAllPets = async(req, res) => {
    const pets = await Pet.find().populate('clientId', { password: 0 });
    sendResponse(res, 200, 'Mascotas encontradas con éxito', pets);

};

// Obtener una mascota por ID
export const getPetById = async(req, res) => {
    const { petId } = req.params;
    const pet = await Pet.findById(petId);
    if (!pet) {
        const error = ErrorApp(`Mascota no encontrada`, 404);
        throw error;
    }
    sendResponse(res, 200, 'Mascota encontrada con éxito', pet);
};

// Actualizar un cliente por ID
export const updatePet = async(req, res) => {
    const { petId } = req.params;
    const {...updateFields } = req.body;

    const pet = await Pet.findById(petId);

    if (!pet) {
        const error = ErrorApp(`Mascota no encontrada`, 404);
        throw error;
    }
    const updatedPet = await Pet.findByIdAndUpdate(petId, { $set: updateFields }, { new: true });
    sendResponse(res, 200, 'Datos de la mascota actualizados con éxito', updatedPet);
};