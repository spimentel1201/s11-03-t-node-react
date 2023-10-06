import mongoose from 'mongoose';
import Client from '../schemas/client.schema';
import Pet from '../schemas/pet.schema';
import Appointment from '../schemas/appointment.schema';

// Crear una nueva cita
export const createAppointment = async (req, res) => {
  try {
    const { date, reason, cost, notes, petId, clientId } = req.body;

    //Verificar que los id de pets y client sean de tipo ObjectId
    if (!mongoose.Types.ObjectId.isValid(clientId) ||  !mongoose.Types.ObjectId.isValid(petId)) {
        return res.status(400).json({ error: 'Id de cliente/mascota inválido' });
    }

    // Verificar si el cliente que se asociara a la cita existe en DB.
    const existingPet = await Pet.findById(petId);
    const existingClient = await Client.findById(clientId);

    if (!existingPet || !existingClient) {
      return res.status(400).json({ error: 'No se encontro cliente-mascota en DB' });
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

    res.status(201).json({ message: 'Cita registrada con éxito', appointment: newAppointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};