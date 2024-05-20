const { http } = require('../../plugins/index')

const getPokemonById = async( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/1${ id }`;
    
    // const resp = await fetch( url );
    // const pokemon = await resp.json();


    
    return pokemon.name;
    // return fetch( url )
    //     .then(( response ) => response.json())
    //     // .then(() => { throw new Error('Pokemon no existe') })
    //     .then(( pokemon  ) => pokemon.name );
}  

module.exports = getPokemonById;