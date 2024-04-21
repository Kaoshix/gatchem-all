import { DrawSixPokemons } from "../lib/draw-six-pokemons";
import { DrawedPokemonsContainer } from "../components/drawed-pokemons-container";

export default async function Home() {

  const pokemons = await DrawSixPokemons();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <DrawedPokemonsContainer pokemons={pokemons} />
    </main>
  );
}
