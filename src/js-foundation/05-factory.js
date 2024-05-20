const { getAge, getUUID } = require('../../plugins/index');

function buildMakePerson ({ name, birthdate }){
    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
} 
// const john = buildPerson (obj);


module.exports = {
    buildMakePerson
}