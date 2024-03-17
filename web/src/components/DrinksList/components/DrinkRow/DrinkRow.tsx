import { Drink } from "@/types/drink";
import { Link } from "react-router-dom";

const DrinkRow = ({ drink }: { drink: Drink }) => {
  const ingredients = drink.ingredients
    .map((ingredient) => ingredient.ingredientType)
    .join(", ");

  return (
    <Link to={`/drinques/${drink.oldId}`} className="group">
      <div className="grid grid-cols-[max-content_1fr] mb-7 text-slate-950">
        <div className="mr-6 w-16 h-16 border-[5px] group-hover:border-amber-300 transition-all duration-200">
          <img
            src={`/images/drinks/${drink?.oldId}/${drink?.oldId}p.jpg`}
            width="64"
          />
        </div>
        <div>
          <h1 className="font-serif font-bold text-2xl text-amber-500 group-hover:text-amber-300">
            {drink?.name}
          </h1>
          <div className="text-gray-500">{ingredients}</div>
        </div>
      </div>
    </Link>
  );
};

export default DrinkRow;
