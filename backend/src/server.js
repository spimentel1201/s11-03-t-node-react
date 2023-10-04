import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import connectToDatabase from './config/db';

const app = express();

app.use(cors());
app.use(express.json());

// Usa las rutas de usuario
app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 3000;

// Llama a la función de conexión a la base de datos
connectToDatabase()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');

    app.listen(port, () => {
      console.log(`App corriendo en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Error de conexión a la base de datos: ${error}`);
  });
