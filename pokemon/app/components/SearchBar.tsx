// components/SearchBar.tsx
"use client";
import { useState, KeyboardEvent } from "react";

type SearchBarProps = {
  onSearch: (term: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        className="flex-1 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500"
        placeholder="Digite o nome do Pokémon ou número"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        onClick={() => onSearch(searchTerm)}
      >
        Buscar
      </button>
    </div>
  );
}
