// components/PokemonCard.tsx
import { PokemonData } from "../app/page";

const typeColors: { [key: string]: string } = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-300",
  fighting: "bg-orange-700",
  poison: "bg-purple-500",
  ground: "bg-amber-600",
  flying: "bg-sky-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-amber-800",
  ghost: "bg-indigo-700",
  dragon: "bg-violet-600",
  dark: "bg-gray-800",
  steel: "bg-slate-400",
  fairy: "bg-pink-300",
};

export default function PokemonCard({ pokemon }: { pokemon: PokemonData }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">{pokemon.name}</h2>
      <img
        className="w-48 h-48 mx-auto mb-6"
        src={pokemon.image}
        alt={pokemon.name}
      />

      <div className="space-y-4">
        <div className="flex gap-2 justify-center">
          {pokemon.types.map((type: string, index: number) => (
            <span
              key={index}
              className={`${typeColors[type]} text-white px-4 py-1 rounded-full text-sm`}
            >
              {type.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <strong>Altura:</strong> {pokemon.height}
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <strong>Peso:</strong> {pokemon.weight}
          </div>
          <div className="bg-gray-100 p-3 rounded-lg col-span-2">
            <strong>Habilidades:</strong> {pokemon.abilities}
          </div>
          <div className="bg-gray-100 p-3 rounded-lg col-span-2">
            <strong>Experiência Base:</strong> {pokemon.baseExperience}
          </div>
        </div>
      </div>
    </div>
  );
}
