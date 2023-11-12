const pool = require('../config/databaseController');

module.exports = {

    //consulta para obtener todos los datos de estudiantes
    obtenerTodosLosEstudiantes: async() =>{
        try{
            const result = await pool.query('SELECT * FROM estudiantes');
            return result;
        }catch(error){
            console.error('Ocurrio un problema al consultar estudiantes : ', error);
        }
    }
}