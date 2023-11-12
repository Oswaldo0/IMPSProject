//Sera utilizado para configurar todas las rutas principales del sistema
const express = require('express');
const router = express.Router();
const estudiantesRepository = require('../repositories/EstudianteRepository');

//configuracion de rutas inicial de la aplicacion
router.get('/', async(request, response) =>{
    //Probando la conexion de datos 
    const lstEstudiantes = await estudiantesRepository.obtenerTodosLosEstudiantes();
    console.log('Listado : ' ,lstEstudiantes);
    response.send('Bienvenido al LABORATORIO DE IMPS');
});

module.exports = router;