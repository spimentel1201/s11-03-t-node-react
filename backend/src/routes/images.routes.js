import express from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/image.controller';

const router = express.Router();

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para cargar imágenes, utiliza el controlador
router.post('/upload', upload.single('image'), uploadImage);

export default router;
