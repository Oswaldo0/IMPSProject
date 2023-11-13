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
    },
    
    // Eliminar un estudiante

eliminarEstudiante: async(idestudiante) => {
    try{
    const result = await pool.query('DELETE FROM estudiantes WHERE idestudiante = ?', [idestudiante]);
    return result.affectedRows > 0;
    }catch(error){
    console.error('Erro al eliminar el registro', error);
    }
    },

    insertarNuevoEstudiante: async(idestudiante, nombre, apellido, email, idcarrera, usuario) =>{
        try{
            const result = await pool.query('INSERT INTO estudiantes(idestudiantes,nombre,apellido,email,idcarrera,carrera) VALUES (?,?,?,?,?,?)',[idestudiante,nombre,apellido,email,idcarrera,carrera]);
            return result.affectedRows > 0;
        }catch(error){
            console.error('Ocurrio un error al ingresar el nuevo registro')
        }
    },

    actualizarEstudiantes: async(idestudiante,nombre,apellido,email,idcarrera,carrera) =>{
        try{
            const result = await pool.query('UPDATE estudiantes SET idestudiante=?, nombre=?,apellido=?, email=?,idecarrera=?,carrera=? WHERE idestudiante=?',[idestudiante,nombre,apellido,email,idcarrera,carrera]);
            return result.affectedRows > 0;
        }catch(error){
            console.error('No se pudo actualizar el registro');
        }
    }


}