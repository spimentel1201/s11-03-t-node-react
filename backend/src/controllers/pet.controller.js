import Pet from '../schemas/pet.schema';
import Client from '../schemas/client.schema';

// Crear un nuevo mascota
export const createPet = async (req, res) => {
  try {
    const { name, age, size, weight, suffering, clientId } = req.body;

    // Verificar si el cliente o usuario dueño de la mascota existe
    const existingClient = await Client.findById(clientId);

    if (!existingClient) {
      return res.status(400).json({ error: 'Información del cliente inválida' });
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

    res.status(201).json({ message: 'Mascota registrada con éxito', pet: newPet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todas las mascotas
export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('clientId', { password: 0 });
    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la información de las mascotas' });
  }
};

// Obtener una mascota por ID
export const getPetById = async (req, res) => {
  const { petId } = req.params;
  try {
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }
    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la mascota' });
  }
};

// Actualizar un cliente por ID
export const updatePet = async (req, res) => {
  const { petId } = req.params;
  const { ...updateFields } = req.body;

  try {
    const pet = await Pet.findById(petId);

    if (!pet) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }
    const updatedPet = await Pet.findByIdAndUpdate(petId, { $set: updateFields }, { new: true });

    res.status(200).json({ message: 'Datos de la mascota actualizados con éxito', pet: updatedPet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la información sobre tu mascota' });
  }
};
