import { Link } from '@tanstack/react-router';
import type { Drink } from '@/types/drink';

const DrinkRow = ({ drink }: { drink: Drink }) => {
  const ingredients = drink.ingredients
    .map((ingredient) => ingredient.ingredientType)
    .join(', ');

  return (
    <Link
      to="/drinques/$drinkId"
      params={{ drinkId: String(drink.oldId) }}
      className="group"
    >
      <div className="mb-7 grid grid-cols-[max-content_1fr] text-slate-950">
        <div className="mr-6 size-16 overflow-hidden border-[5px] ">
          <img
            src={`/images/drinks/${drink.oldId}p.jpg`}
            className="transition-all duration-200 group-hover:scale-110 group-hover:opacity-90"
            width="64"
          />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold text-amber-500 group-hover:text-amber-300 group-hover:underline">
            {drink.name}
          </h1>
          <div className="text-gray-500">{ingredients}</div>
        </div>
      </div>
    </Link>
  );
};

export default DrinkRow;
