import express from 'express';
import multer from 'multer';
import { deleteImage, uploadImage } from '../controllers/image.controller';
import { deleteImageValidation, uploadImageValidation } from '../middlewares/validation.middleware';

const router = express.Router();

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para cargar imágenes, utiliza el controlador
router.post('/upload', upload.single('image'), uploadImageValidation, uploadImage);
router.delete('/delete', deleteImageValidation, deleteImage);
export default router;
