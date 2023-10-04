import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import connectToDatabase from './config/db';

const app = express();

app.use(cors());
app.use(express.json());

// Usa la aplicación configurada que incluye todas las rutas
app.use('/', routes);

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
