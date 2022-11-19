import app from "./app.js";
import { PORT } from "./config.js";

//Iniciando el servidor
app.listen(PORT);
console.log('Server iniciado en el puerto',PORT)
