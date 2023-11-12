const express = require('express');

//Inicializaciones
const app = express();

//Ajustes del servidor 
app.set('port', process.env.PORT || 4000);

//Inciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor Iniciado puerto : ', app.get('port'));
});