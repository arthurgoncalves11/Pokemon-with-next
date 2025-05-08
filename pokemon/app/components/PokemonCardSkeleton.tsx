// components/PokemonCardSkeleton.tsx

export default function PokemonCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md animate-pulse">
      <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto mb-4" />

      <div className="w-48 h-48 bg-gray-300 mx-auto mb-6 rounded" />

      <div className="space-y-4">
        <div className="flex gap-2 justify-center">
          <div className="h-6 w-16 bg-gray-300 rounded-full" />
          <div className="h-6 w-16 bg-gray-300 rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg h-6 w-full" />
          <div className="bg-gray-100 p-3 rounded-lg h-6 w-full" />
          <div className="bg-gray-100 p-3 rounded-lg h-6 w-full col-span-2" />
          <div className="bg-gray-100 p-3 rounded-lg h-6 w-full col-span-2" />
        </div>
      </div>
    </div>
  );
}
