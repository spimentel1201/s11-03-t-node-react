import express from 'express';
import multer from 'multer';
import { deleteImage, getAllImagesUser, getImageById, uploadImage } from '../controllers/image.controller';
import { uploadImageValidation } from '../middlewares/validation.middleware';
import { checkAuthentication } from '../middlewares/auth.middleware';
import { validMongoId } from '../middlewares/validMongoId.middleware';

const router = express.Router();

// Aplica el middleware de autenticación a las rutas que deseas proteger
router.use(checkAuthentication);

// Middleware para todas las rutas de cliente que requieren un cliente por ID
router.param('imageId', validMongoId('imageId'));

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para cargar imágenes, utiliza el controlador
router.get('/', getAllImagesUser);
router.get('/:imageId', getImageById);
router.post('/upload', upload.single('image'), uploadImageValidation, uploadImage);
router.delete('/:imageId', deleteImage);

export default router;
