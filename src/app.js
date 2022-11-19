import express from 'express';
import paisesRoutes from "./routes/paises.routes.js";
import indexRoutes from "./routes/index.routes.js";




const app = express();

// Configuraciones

app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);


// Middlewares
app.use(express.json());



// Rutas

app.use(indexRoutes);
app.use('/api',paisesRoutes);

// NOT FOUND 

app.use((req,res,next) => {
      res.status(404).json({
           message: 'Endpoint no encontrado'
      })
})

export default app;