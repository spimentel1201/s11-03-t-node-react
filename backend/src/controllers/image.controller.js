import cloudinary from '../config/cloudinary-config';
import { Stream } from 'stream';
import { tryCatch } from '../utils/tryCatch';
import { sendResponse } from '../responses/responseUtils';
import ErrorApp from '../utils/ErrorApp';
import Image from '../schemas/image.schema';

// Obtener todas las imágenes del usuario
export const getAllImagesUser = tryCatch(async (req, res) => {
  const clientId = req.client.clientId;

  const userImages = await Image.find({ clientId });
  sendResponse(res, 200, 'Imágenes del usuario obtenidas con éxito', userImages);
});

// Obtener una imagen por Id
export const getImageById = tryCatch(async (req, res) => {
  const { imageId } = req.params; // Obtén el ID de la imagen desde los parámetros de la ruta

  // Realiza una búsqueda en la base de datos para encontrar la imagen por su ID
  const image = await Image.findOne({ _id: imageId });

  if (!image) {
    const error = ErrorApp(`Imagen no encontrada`, 404);
    throw error;
  }

  // La imagen se encontró, responde con los detalles de la imagen
  sendResponse(res, 200, 'Imagen obtenida con éxito', image);
});

// Cargar una nueva imagen
export const uploadImage = tryCatch(async (req, res) => {
  // Verificar cuántas imágenes ya ha subido el usuario
  const clientId = req.client.clientId;
  const userImageCount = await Image.countDocuments({ clientId });

  if (userImageCount >= 10) {
    const error = ErrorApp(
      `Ha alcanzado el límite máximo de ${userImageCount} imágenes. Elimine algunas antes de subir más.`,
      400,
    );
    throw error;
  }

  // El usuario no ha alcanzado el límite, por lo que puede subir la imagen
  const stream = new Stream.PassThrough();
  stream.end(req.file.buffer);

  const result = cloudinary.uploader.upload_stream(async (error, cloudinaryResult) => {
    const { public_id, secure_url } = cloudinaryResult;

    const newImage = new Image({
      clientId,
      public_id,
      photo_url: secure_url,
    });

    await newImage.save();

    sendResponse(res, 200, 'Imagen cargada con éxito', newImage);
  });

  stream.pipe(result);
});

// Eliminar una imagen por su Id
export const deleteImage = tryCatch(async (req, res) => {
  const { imageId } = req.params;

  // Buscar la imagen en la base de datos usando el imageId
  const image = await Image.findById(imageId);

  if (!image) {
    const error = ErrorApp(`La imagen no se encuentra en la base de datos.`, 404);
    throw error;
  }

  // Obtén el public_id de la imagen en la base de datos
  const publicId = image.public_id;

  // Verificar si la imagen existe en Cloudinary
  const imageExists = await imageExistsInCloudinary(publicId);

  if (!imageExists) {
    const error = ErrorApp(`La imagen no existe en Cloudinary.`, 404);
    throw error;
  }

  // Elimina la imagen de la base de datos usando el método findByIdAndRemove
  await Image.findByIdAndRemove(imageId);

  // Elimina la imagen de Cloudinary usando el public_id
  await cloudinary.uploader.destroy(publicId);

  sendResponse(res, 200, 'Imagen eliminada con éxito');
});

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
