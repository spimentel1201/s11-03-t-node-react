import mongoose from 'mongoose';

const appointmentSchemaDefinition = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  /* veterinarianId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veterinarian',
    required: true,
  }, */
});

const Appointment = mongoose.model('Appointment', appointmentSchemaDefinition);

export default Appointment;
