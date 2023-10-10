import Client from '../schemas/client.schema';
import Pet from '../schemas/pet.schema';
import Appointment from '../schemas/appointment.schema';

// Crear una nueva cita
export const createAppointment = async (req, res) => {
  try {
    const { date, reason, cost, notes, petId, clientId } = req.body;

    // Verificar si el cliente que se asociara a la cita existe en DB.
    const existingPet = await Pet.findById(petId);
    const existingClient = await Client.findById(clientId);

    if (!existingClient) {
      return res.status(400).json({ error: 'No se encontro cliente en DB' });
    }
    if (!existingPet) {
      return res.status(400).json({ error: 'No se encontro mascota en DB' });
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

    res.status(201).json({ message: 'Cita creada con éxito', appointment: newAppointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todas las citas
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate([
      { path: 'clientId' }, 
      { path: 'petId' }, 
    ]);
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener una cita por ID
export const getAppointmentById = async (req, res) => {
  const { appointmentId } = req.params;
  try {
    const appointment = await Appointment.findById(appointmentId)
      .populate('clientId', '-password')
      .populate('petId');

    if (!appointment) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }

    res.status(200).json(appointment);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar una cita por ID
export const updateAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const { ...updateFields } = req.body;

  try {
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { $set: updateFields },
      { new: true },
    );

    res.status(200).json({ message: 'Datos de la cita actualizados con éxito', appointment: updatedAppointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar una cita por ID
export const deleteAppointment = async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }

    res.status(200).json({ message: 'La cita fue eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
