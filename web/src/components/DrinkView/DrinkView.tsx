import { Drink } from "@/types/drink";
import Breadcrumbs from "@/components/Breadcrumbs";
import DrinkAlcoholicContent from "./components/DrinkAlcoholicContent";
import DrinkDifficulty from "./components/DrinkDifficulty";
import DrinkIngredients from "./components/DrinkIngredients";
import DrinkPreparationSteps from "./components/DrinkPreparationSteps";
import DrinkInstructions from "./components/DrinkInstructions";
import DrinkDescription from "./components/DrinkDescription";

const DrinkView = ({ drink }: { drink?: Drink }) => (
  <div className="grid gap-4 text-gray-700 md:grid-cols-[max-content_1fr]">
    <div className="pt-10 md:pr-36">
      <img src={`/images/drinks/${drink?.oldId}/${drink?.oldId}g.jpg`} />
    </div>
    <div>
      <Breadcrumbs />
      <h1 className="mb-7 mt-6 font-serif text-4xl font-bold text-amber-500">
        {drink?.name}
      </h1>
      <div className="grid max-w-xl grid-cols-3">
        <div>
          <div className="font-serif text-lg font-bold text-slate-950">
            Calorias
          </div>
          {drink?.calories}
        </div>
        <div>
          <div className="font-serif text-lg font-bold text-slate-950">
            Teor alcoólico
          </div>
          <DrinkAlcoholicContent alcoholicContent={drink?.alcoholicContent} />
        </div>
        <div>
          <div className="font-serif text-lg font-bold text-slate-950">
            Dificuldade
          </div>
          <DrinkDifficulty difficulty={drink?.difficulty} />
        </div>
      </div>
      <div className="my-9 w-32 border-t border-dashed border-gray-200" />
      <DrinkIngredients drink={drink} />
      <div className="my-9 w-32 border-t border-dashed border-gray-200" />
      <DrinkPreparationSteps drink={drink} />
      <DrinkDescription drink={drink} />
      <DrinkInstructions drink={drink} />
    </div>
  </div>
);

export default DrinkView;
