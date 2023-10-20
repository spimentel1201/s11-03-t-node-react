import schedule from 'node-schedule';
import fs from 'fs';
import transporter from '../config/node-mailer';
import Appointment from '../schemas/appointment.schema';

// Enviar recordatorio por email a los clientes con citas activas para el día siguiente
export default function sendReminders() {
  //Cambiar zona horaria a UTC+0 en tiempo de ejecución
  process.env.TZ = 'Etc/UTC';

  // Schedule ejecutando callback todos los días 10:00 UTC+0
  schedule.scheduleJob('0 10 * * *', async () => {
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
      // Envía el correo de recordatorio de la cita
      const appointmentReminderTemplatePath = 'public/mails/templates/appointment_reminder.html';
      const appointmentReminderContent = fs.readFileSync(appointmentReminderTemplatePath, 'utf8');

      // Reemplaza las variables con valores reales
      const clientEmail = appointment.clientId.email;
      const petName = appointment.petId.name;
      const clientFullname = appointment.clientId.fullname;
      const veterinarianFullname = appointment.veterinarianId.first_name; //!Falta Actualizar por si cambia el campo de veterinario a fullname

      const appointmentDate = new Date(appointment.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      });

      const appointmentStartTime = new Date(appointment.start_time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC',
      });

      const appointmentReason = appointment.reason;

      const appointmentReminderContentReplaced = appointmentReminderContent
        .replace('[Nombre de Mascota]', petName)
        .replace('[Nombre del Cliente]', clientFullname)
        .replace('[Nombre del Veterinario]', veterinarianFullname)
        .replace('[Fecha de Cita]', appointmentDate)
        .replace('[Hora de Inicio]', appointmentStartTime)
        .replace('[Motivo de Cita]', appointmentReason);

      // Envía el correo de recordatorio de la cita al cliente
      const clientMailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: clientEmail,
        subject: 'Preparándonos para Tu Visita de Mañana',
        html: appointmentReminderContentReplaced,
      };

      await transporter.sendMail(clientMailOptions);
    });

    console.log('Recordatorios enviados: ' + today);
  });
}
