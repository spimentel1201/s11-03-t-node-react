import Client from '../schemas/client.schema';

// Crear un nuevo cliente
export const createClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica si el correo electrónico ya existe en la base de datos
    const existingClient = await Client.findOne({ email });

    if (existingClient) {
      return res.status(400).json({ error: 'El correo electrónico ya está en uso' });
    }

    const newClient = new Client({
      email,
      password,
    });

    await newClient.save();

    res.status(201).json({ message: 'Cliente creado con éxito', client: newClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todos los clientes
export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find({ isActive: true }, { password: 0 });
    res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

// Obtener un cliente por ID
export const getClientById = async (req, res) => {
  const { clientId } = req.params;
  try {
    const client = await Client.findById(clientId, { password: 0 }); // Excluir el campo 'password' en la consulta
    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

// Actualizar un cliente por ID
export const updateClient = async (req, res) => {
  const { clientId } = req.params;
  const { ...updateFields } = req.body;

  try {
    const client = await Client.findById(clientId);

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Verifica si el cliente está inactivo antes de permitir la actualización
    if (!client.isActive) {
      return res.status(403).json({ error: 'No se puede actualizar un cliente inactivo' });
    }

    // Actualiza los campos si el cliente está activo
    const updatedClient = await Client.findByIdAndUpdate(clientId, { $set: updateFields }, { new: true });

    // Si el cliente se actualiza con éxito, elimina la contraseña y envía la respuesta
    delete updatedClient.password;
    res.status(200).json({ message: 'Cliente actualizado con éxito', client: updatedClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
};

// Eliminar un cliente por ID
export const deleteClient = async (req, res) => {
  const { clientId } = req.params;
  try {
    const client = await Client.findByIdAndUpdate(clientId, { isActive: false }, { new: true });
    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.status(200).json({ message: 'Cliente desactivado con éxito' });
  } catch (error) {
    console.log(error);
  }
};
