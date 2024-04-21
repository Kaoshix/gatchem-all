import axios from "axios";

export const DrawSixPokemons = async () => {

    const numberToDraw = 6;
    // const totalPokemons = 1025;
    const totalPokemons = 151;
    const pokemons = [];

    for (let i = 0; i < numberToDraw; i++) {
        const randomNumber = Math.floor(Math.random() * totalPokemons);

        try {
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            pokemons.push(pokemon.data);
        } catch (error) {
            console.error(error);
        }
    }
    return pokemons;
}