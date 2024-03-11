import { Drink } from "@/types/drink";
import { Link } from "react-router-dom";

const DrinkRow = ({ drink }: { drink: Drink }) => {
  const ingredients = drink.ingredients
    .map((ingredient) => ingredient.ingredientType)
    .join(", ");

  return (
    <div className="grid grid-cols-[max-content_1fr] mb-6 text-slate-950">
      <Link to={`/drinques/${drink.oldId}`}>
        <div className="mr-6 border-4">
          <img src={`/images/drinks/${drink?.oldId}/${drink?.oldId}p.jpg`} />
        </div>
      </Link>
      <div>
        <h1 className="font-serif font-bold text-2xl text-amber-500">
          <Link to={`/drinques/${drink.oldId}`}>{drink?.name}</Link>
        </h1>
        <div>
          <span className="text-gray-500">Ingredientes:</span> {ingredients}
        </div>
      </div>
    </div>
  );
};

export default DrinkRow;
