import Appointment from '../src/schemas/appointment.schema';
import Client from '../src/schemas/client.schema';
import Image from '../src/schemas/image.schema';
import Pet from '../src/schemas/pet.schema';
import Veterinarian from '../src/schemas/veterinarian.schema';

const schemaDefinitions = {
  client: Client,
  appointment: Appointment,
  pet: Pet,
  veterinarian: Veterinarian,
  image: Image,
};

export default schemaDefinitions;
