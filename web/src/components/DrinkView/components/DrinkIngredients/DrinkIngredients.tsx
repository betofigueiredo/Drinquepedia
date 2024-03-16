import { Drink } from "@/types/drink";

const DrinkIngredients = ({ drink }: { drink?: Drink }) => (
  <div>
    <h5 className="font-serif font-bold text-2xl text-slate-950 mb-3">
      Ingredientes
    </h5>
    <ul>
      {drink?.ingredients.map((ingredient) => (
        <li key={ingredient.order} className="relative pl-7">
          <div className="absolute left-0 top-2 w-2 h-2 border-gray-300 border rounded-full" />
          {ingredient.quantity || ""} {ingredient.unitOfMeasurement || ""}
          {ingredient.unitOfMeasurement ? " de " : " "}
          {ingredient.ingredientType}
        </li>
      ))}
      {drink?.decoration && (
        <li className="relative pl-7">
          <div className="absolute left-0 top-2 w-2 h-2 border-gray-300 border rounded-full" />
          {drink?.decoration}
        </li>
      )}
    </ul>
  </div>
);

export default DrinkIngredients;
