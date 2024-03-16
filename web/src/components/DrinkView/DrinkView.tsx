import { Drink } from "@/types/drink";
import DrinkAlcoholicContent from "./components/DrinkAlcoholicContent";
import DrinkDifficulty from "./components/DrinkDifficulty";
import DrinkIngredients from "./components/DrinkIngredients";
import DrinkPreparationSteps from "./components/DrinkPreparationSteps";
import DrinkInstructions from "./components/DrinkInstructions";
import DrinkDescription from "./components/DrinkDescription";

const DrinkView = ({ drink }: { drink?: Drink }) => (
  <div className="grid grid-cols-[max-content_1fr] text-gray-700 gap-4">
    <div className="pr-36 pt-4">
      <img src={`/images/drinks/${drink?.oldId}/${drink?.oldId}g.jpg`} />
    </div>
    <div>
      <h1 className="font-serif font-bold text-4xl text-amber-500 mt-10 mb-7">
        {drink?.name}
      </h1>
      <div className="max-w-xl grid grid-cols-3">
        <div>
          <div className="font-serif font-bold text-lg text-slate-950">
            Calorias
          </div>
          {drink?.calories}
        </div>
        <div>
          <div className="font-serif font-bold text-lg text-slate-950">
            Teor alcoólico
          </div>
          <DrinkAlcoholicContent alcoholicContent={drink?.alcoholicContent} />
        </div>
        <div>
          <div className="font-serif font-bold text-lg text-slate-950">
            Dificuldade
          </div>
          <DrinkDifficulty difficulty={drink?.difficulty} />
        </div>
      </div>
      <div className="w-32 border-dashed border-t border-gray-200 mt-9 mb-9" />
      <DrinkIngredients drink={drink} />
      <div className="w-32 border-dashed border-t border-gray-200 mt-9 mb-9" />
      <DrinkPreparationSteps drink={drink} />
      <div className="w-32 border-dashed border-t border-gray-200 mt-9 mb-9" />
      <DrinkDescription drink={drink} />
      <DrinkInstructions drink={drink} />
    </div>
  </div>
);

export default DrinkView;
