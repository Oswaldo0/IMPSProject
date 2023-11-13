const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); //necesario para utilizar el motor de pantillas handlebars
const path = require('path');

//Inicializaciones
const app = express();

require('dotenv').config();

//Ajustes del servidor 
app.set('port', process.env.PORT || 4500);
app.set('views', path.join(__dirname, 'views')); //configuracion de la ruta donde se encuentran las vistas

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', //configuracion del layout principal
    layoutsDir : path.join(app.get('views'), 'layouts'), //ruta de layout
    extname: '.hbs'//extension que tendran los archivos HandleBars
}));

app.set('view engine', '.hbs'); //configuracion para ejecutar el motor de pantillas
app.use(morgan('dev')); //configuracion middleware morgan para visualizar que esta llegando al servidor
app.use(express.urlencoded({extended: false})); //sirve para aceptar datos desde formularios

//Configurando rutas
app.use(require('./routes')) //Node automaticamente buscara el index del modulo
app.use('/estudiantes',require('./routes/estudiantes')); //configuracion de ruta para estudiantes

//archivo publicos (Aca se coloca todo el codigo el cual el navegador puede acceder)
app.use(express.static(path.join(__dirname, 'public')));

//Inciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor Iniciado puerto : ', app.get('port'));
});