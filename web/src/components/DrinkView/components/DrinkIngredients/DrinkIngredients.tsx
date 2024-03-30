import { Drink } from "@/types/drink";

const DrinkIngredients = ({ drink }: { drink?: Drink }) => (
  <div>
    <h5 className="mb-3 font-serif text-2xl font-bold text-slate-950">
      Ingredientes
    </h5>
    <ul>
      {drink?.ingredients.map((ingredient) => (
        <li key={ingredient.order} className="relative pl-7">
          <div className="absolute left-0 top-2 size-2 rounded-full border border-gray-300" />
          {ingredient.quantity || ""} {ingredient.unitOfMeasurement || ""}
          {ingredient.unitOfMeasurement ? " de " : " "}
          {ingredient.ingredientType}
        </li>
      ))}
      {drink?.decoration && (
        <li className="relative pl-7">
          <div className="absolute left-0 top-2 size-2 rounded-full border border-gray-300" />
          {drink?.decoration}
        </li>
      )}
    </ul>
  </div>
);

export default DrinkIngredients;
