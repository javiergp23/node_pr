//FACTORY FUNCTIONS__________________________________________________

// const { buildMakePerson } = require('./js-foundation/05-factory');

// const { getUUID, getAge } = require('../plugins/index')

// buildMakePerson({ getUUID, getAge });

// const obj = { name:'John', birthdate: '1992-06-23' };

// const john = buildMakePerson( obj );

// console.log({john} );

//____________________________________________________________________


const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(5)
 .then(( pokemon ) => console.log({ pokemon })) 
 .catch((err) => console.log('Hay un error'))
 .finally(() => console.log('finalmente'))


 //token de acceso
 //publicas