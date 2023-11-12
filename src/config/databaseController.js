const mysql = require('mysql2');
const {promisify} = require('util');
const { database } = require('./keys');
const { CONSTANTS } = require('../utils/utils');

const pool = mysql.createPool(database); //Creamos el pool de conexiones

//Iniciando la conexion con la base de datos
pool.getConnection((error,conexion) =>{
    //Validar si la conexion tiene algun error
    if(error){
        switch(error.code){
            case CONSTANTS.PROTOCOL_CONNECTION_LOST:
                //Conexion con la base de datos perdida
                console.error('DATABASE CONNECTION WAS CLOSED');
            break;
            case CONSTANTS.ER_CON_COUNT_ERROR: 
                //Demasiadas conexiones existentes
                console.error('DATABASE HAS TO MANY CONNECTIONS');
            break;
            case CONSTANTS.ECONNREFUSED:
                //Indica que la conexion fue rechazada
                console.error('DATABASE CONNECTION WAS REFUSED')
            break;
            case CONSTANTS.ER_ACCESS_DENIED_ERROR:
                //EL acceso esta denegado
                console.error('ACCESS DENIED FOR USER');
            break;
            default:
            console.error('ERROR BASE DE DATOS NO FUE ENCONTRADA');
            break;
        }
    }
    //Conexion es exitosa, imprimir un mensaje
    if(conexion){
        console.log('CONEXION ESTABLECIDA CON LA BASE DE DATOS');
        conexion.release();
    }
    return;
} );

//CONFIGURANDO PROMISIY PARA PERMITIR EN CADA CONSULTA UN asyn/await (promesas)
pool.query = promisify(pool.query);

module.exports = pool;