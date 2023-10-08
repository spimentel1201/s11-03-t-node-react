import Client from '../schemas/client.schema';
import ErrorApp from '../utils/ErrorApp';
import disableEntity from '../utils/disableEntity';
import { tryCatch } from '../utils/tryCatch';

// Crear un nuevo cliente
export const createClient = tryCatch(async (req, res) => {
  const { email, password } = req.body;

  // Verifica si el correo electrónico ya existe en la base de datos
  const existingClient = await Client.findOne({ email });

  if (existingClient) {
    const error = ErrorApp('El correo electrónico ya está en uso', 400);
    throw error;
  }

  const newClient = new Client({
    email,
    password,
  });

  // Guarda el nuevo cliente en la base de datos
  await newClient.save();

  // Elimina la propiedad de la contraseña antes de enviar la respuesta
  const clientResponse = { ...newClient._doc };
  delete clientResponse.password;

  res.status(201).json({ message: 'Cliente creado con éxito', client: clientResponse });
});

// Obtener todos los clientes
export const getAllClients = tryCatch(async (req, res) => {
  const clients = await Client.find({ isActive: true }, { password: 0 });
  res.status(200).json(clients);
});

// Obtener un cliente por ID
export const getClientById = tryCatch(async (req, res) => {
  const { clientId } = req.params;

  const client = await Client.findById(clientId, { password: 0 });

  if (!client) {
    const error = ErrorApp(`Cliente no encontrado`, 404);
    throw error;
  }

  res.status(200).json(client);
});

// Actualizar un cliente por ID
export const updateClient = tryCatch(async (req, res) => {
  const { clientId } = req.params;
  const { ...updateFields } = req.body;

  const client = await Client.findById(clientId);

  // Verifica si el cliente existe

  if (!client) {
    const error = ErrorApp(`Cliente no encontrado`, 404);
    throw error;
  }

  // Verifica si el cliente está activo antes de permitir la actualización
  if (!client.isActive) {
    const error = ErrorApp('No se puede actualizar un cliente inactivo', 404);
    throw error;
  }

  // Actualiza los campos si el cliente está activo
  const updatedClient = await Client.findByIdAndUpdate(clientId, { $set: updateFields }, { new: true });

  // Si el cliente se actualiza con éxito, elimina la contraseña y envía la respuesta
  delete updatedClient.password;
  res.status(200).json({ message: 'Cliente actualizado con éxito', client: updatedClient });
});

// Desactivar un cliente por ID
export const deleteClient = tryCatch(async (req, res, next) => {
  const { clientId } = req.params;

  // Llama a la función útil disableEntity con los tres parametros
  await disableEntity(Client, clientId, 'Cliente');

  res.status(200).json({ message: 'Cliente desactivado con éxito' });
  next();
});
