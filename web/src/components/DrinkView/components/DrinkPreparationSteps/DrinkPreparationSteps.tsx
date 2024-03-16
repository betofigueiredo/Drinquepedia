import { Drink } from "@/types/drink";

const DrinkPreparationSteps = ({ drink }: { drink?: Drink }) => (
  <div>
    <h5 className="font-serif font-bold text-2xl text-slate-950 mb-3">
      Modo de preparo
    </h5>
    <ul>
      {drink?.preparationSteps.map((preparationStep) => (
        <li key={preparationStep.order} className="relative pl-7 pb-2">
          <div className="absolute left-0 top-[-2px] font-serif font-bold text-2xl text-slate-950">
            {preparationStep.order}
          </div>
          {preparationStep.description}
        </li>
      ))}
    </ul>
  </div>
);

export default DrinkPreparationSteps;
