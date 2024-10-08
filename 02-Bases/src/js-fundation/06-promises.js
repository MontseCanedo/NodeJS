const { http } = require('../plugins');

const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon = await http.get(url);
    return pokemon.name;

    /*** Forma 1 (antigua) ***/
    // return fetch( url )
    // .then( (response) => response.json())
    // // .then( () => { throw new Error('pokemon no existe') } )
    // .then( (pokemon) => pokemon.name);
}

module.exports = getPokemonById;