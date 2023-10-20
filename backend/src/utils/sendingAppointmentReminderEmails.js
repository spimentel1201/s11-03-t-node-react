import schedule from 'node-schedule';
import Appointment from '../schemas/appointment.schema';

// Enviar recordatorio por email a los clientes con citas activas para el día siguiente
export default function sendReminders() {
  //Cambiar zona horaria a UTC+0 en tiempo de ejecución
  process.env.TZ = 'Etc/UTC';

  // Schedule ejecutando callback cada 10 seg
  schedule.scheduleJob('*/10 * * * * *', async () => {
    //Obtener fecha actual y de día siguiente seteado a hora 00:00 UTC+0
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setUTCHours(0, 0, 0, 0);

    //Obtener de DB citas activas del día siguiente
    const appointments = await Appointment.find({
      date: {
        $eq: tomorrow,
      },
      isActive: true,
    })
      .populate('clientId')
      .populate('petId')
      .populate('veterinarianId');

    //Recorrer citas obtenidas de DB
    appointments.forEach(async (appointment) => {
      console.log('Nombre mascota: ' + appointment.petId.name);
      console.log('Email cliente: ' + appointment.clientId.email);
      console.log('Nombre cliente: ' + appointment.clientId.fullname);
      console.log('Nombre veterinario: ' + appointment.veterinarianId.first_name);
      console.log('Razón de la cita: ' + appointment.reason);
      console.log('Fecha de la cita: ' + appointment.date);
      console.log('Hora de la cita: ' + appointment.start_time);
      console.log('-----------------------------');
    });
  });
}
