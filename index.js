const {crearArchivo} = require('./helpers/multiplicar.js');
const arg = require('./config/yargs.js');


crearArchivo(arg.b, arg.l, arg.h)
    .then((nombre) => console.log(nombre))
    .catch((err) => console.log(err));

