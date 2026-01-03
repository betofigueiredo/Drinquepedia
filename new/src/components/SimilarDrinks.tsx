import type { Drink } from '@/types/drink';
import DrinkRow from '@/components/DrinkRow';

const SimilarDrinks = ({ similarDrinks }: { similarDrinks: Array<Drink> }) => {
  if (similarDrinks.length === 0) {
    return null;
  }

  return (
    <div className="mt-14 grid gap-4 text-gray-700 md:grid-cols-[max-content_1fr]">
      <div className="w-89.75 pt-4 md:pr-36" />
      <div>
        <hr className="my-9 mb-20 w-full max-w-xs border-2 border-t border-gray-100" />
        <h1 className="mb-7 mt-10 font-serif text-2xl font-bold text-slate-900">
          Drinques similares
        </h1>
        {similarDrinks.map((drink) => (
          <DrinkRow key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default SimilarDrinks;
