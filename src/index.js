const express = require('express');

//Inicializaciones
const app = express();

require('dotenv').config();

//Ajustes del servidor 
app.set('port', process.env.PORT || 4500);

//Configurando rutas
app.use(require('./routes')) //Node automaticamente buscara el index del modulo

//Inciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor Iniciado puerto : ', app.get('port'));
});