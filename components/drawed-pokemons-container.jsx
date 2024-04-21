import Image from "next/image";

export const DrawedPokemonsContainer = ({ pokemons }) => {
    return (
        <div className="grid grid-cols-3 gap-10 max-w-screen-2xl mx-auto">
            {pokemons.map((pokemon) => (
                <div
                    key={pokemon.id}
                    className="flex flex-col items-center justify-center"
                >
                    <Image
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />
                    <h2 className="text-2xl font-bold">{pokemon.name}</h2>
                </div>
            ))}
        </div>
    )
}