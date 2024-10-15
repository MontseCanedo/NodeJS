// const { buildMakePerson } = require('./js-fundation/05-factory');
// const { getId, getAge } = require('./plugins');
// // ! Referencia a la funcion factory y uso
// // const makePerson = buildMakePerson({getId, getAge})
// // const obj = { name: 'John', birthday: '1995-5-30'};
// // const john = makePerson(obj);
// // console.log(john);

import { buildLogger } from "./plugins/logger.plugin";

// const getPokemonById = require('./js-fundation/06-promises');
// // getPokemonById(1).then( (pokemon) => console.log({pokemon}))
// // .catch( (err) => console.log({err}))
// // .finally ( () => console.log('Finalmente'));

const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Esto es algo malo');
