import mongoose from 'mongoose';
import Client from '../schemas/client.schema';
import Pet from '../schemas/pet.schema';
import Appointment from '../schemas/appointment.schema';

// Crear una nueva cita
export const createAppointment = async (req, res) => {
  try {
    const { date, reason, cost, notes, petId, clientId } = req.body;

    //Verificar que los id de pets y client sean de tipo ObjectId
    if (!mongoose.Types.ObjectId.isValid(clientId) || !mongoose.Types.ObjectId.isValid(petId)) {
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

// Obtener todas las citas
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate([
      { path: 'clientId', select: '-password' }, // Poblar la referencia a Client
      { path: 'petId' }, // Poblar la referencia a Doctor
    ]);
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la información de la cita' });
  }
};

// Obtener una cita por ID
export const getAppointmentById = async (req, res) => {
  const { appointmentId } = req.params;
  try {
    //Verificar que appointmentId sea de tipo ObjectId
    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
      return res.status(400).json({ error: 'Id inválido' });
    }

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la cita' });
  }
};


