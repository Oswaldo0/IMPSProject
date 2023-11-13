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
    
    insertarNuevoEstudiante: async(idestudiante, nombre, apellido, email) =>{
        try{
            const result = await pool.query('INSERT INTO estudiantes(idestudiantes,nombre,apellido,email) VALUES (?,?,?,?)',[idestudiante,nombre,apellido,email]);
            return result.affectedRows > 0;
        }catch(error){
            console.error('Ocurrio un error al ingresar el nuevo registro')
        }
    },

    actualizarEstudiantes: async(idestudiante,nombre,apellido,email) =>{
        try{
            const result = await pool.query('UPDATE estudiantes SET idestudiante=?, nombre=?,apellido=?, email=? WHERE idestudiante=?',[idestudiante,nombre,apellido,email]);
            return result.affectedRows > 0;
        }catch(error){
            console.error('No se pudo actualizar el registro');
        }
    },

    insertarNuevaCarrera: async (idcarrea, usuario) =>{
        try{
            const result = await pool.query('INSERT INTO estudiantes(idcarrea, usuario ) VALUES (?,?)',[idcarrea,usuario]);
            return result.affectedRows > 0;
        }catch(error){
            console.error('No se pudo insertar la carrea ');
        }
    },
    ActualizarCarreras: async (idestudiante,idcarrea,usuario)=>{
        try{
            const result = await pool.query('UPDATE estudiantes SET idcarrera=?, usuario=? where idestudiante=?'[idestudiante,idcarrea,usuario]);
            return result.affectedRows>0;
        }catch(error){
            console.error('No se pudo actualizar la carrera');
        }
    }


}