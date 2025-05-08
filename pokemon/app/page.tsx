// app/page.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import PokemonCardSkeleton from "./components/PokemonCardSkeleton";

type PokemonData = {
  name: string;
  image: string;
  height: string;
  weight: string;
  baseExperience: number | string;
  abilities: string;
  types: string[];
};

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setError("Por favor, digite o nome de um Pokémon");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );

      if (!response.ok) throw new Error("Pokémon não encontrado!");

      const data = await response.json();

      const formattedData: PokemonData = {
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        image:
          data.sprites.other["official-artwork"].front_default ||
          data.sprites.front_default,
        height: `${data.height / 10}m`,
        weight: `${data.weight / 10}kg`,
        baseExperience: data.base_experience || "N/A",
        abilities: data.abilities
          .map((ability: { ability: { name: string } }) =>
            ability.ability.name.replace("-", " ")
          )
          .map((str: string) => str.charAt(0).toUpperCase() + str.slice(1))
          .join(", "),
        types: data.types.map(
          (type: { type: { name: string } }) => type.type.name
        ),
      };

      setPokemon(formattedData);
    } catch (err) {
      setError((err as Error).message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
        Pokedex
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="text-center my-4">
          <PokemonCardSkeleton />
        </div>
      )}
      {error && <div className="text-red-600 text-center my-4">{error}</div>}
      {pokemon && !loading && <PokemonCard pokemon={pokemon} />}
    </main>
  );
}
