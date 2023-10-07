import cloudinary from '../config/cloudinary-config';
import { Stream } from 'stream';

export const uploadImage = async (req, res) => {
  try {
    // Crea un flujo a partir del búfer
    const stream = new Stream.PassThrough();
    stream.end(req.file.buffer);

    // Sube el flujo a Cloudinary utilizando upload_stream
    const result = await cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al cargar la imagen' });
      } else {
        // Devuelve la URL de la imagen subida en la respuesta
        res.json({ photo_url: result.secure_url });
      }
    });

    // Pasa el flujo al método upload_stream
    stream.pipe(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al cargar la imagen' });
  }
};
export const deleteImage = async (req, res) => {
  const { publicId } = req.body;

  try {
    // Verificar si la imagen existe en Cloudinary
    const imageExists = await imageExistsInCloudinary(publicId);

    if (!imageExists) {
      return res.status(404).json({ error: 'La imagen no existe en Cloudinary.' });
    }

    // La imagen existe, procede a eliminarla
    await cloudinary.uploader.destroy(publicId);
    res.json({ message: 'Imagen eliminada con éxito.' });
  } catch (error) {
    console.error(`Error al eliminar la imagen con public_id ${publicId}: ${error}`);
    res.status(500).json({ error: 'Error al eliminar la imagen de perfil' });
  }
};

// Función para verificar si una imagen existe en Cloudinary
const imageExistsInCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.api.resource(publicId);
    return 'public_id' in result;
  } catch (error) {
    console.error(`Error al verificar la existencia de la imagen: ${error.message}`);
    return false;
  }
};
