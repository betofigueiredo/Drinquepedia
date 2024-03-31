import { Drink } from "@/types/drink";

const DrinkPreparationSteps = ({ drink }: { drink?: Drink }) => (
  <div>
    <h5 className="mb-3 font-serif text-2xl font-bold text-slate-950">
      Modo de preparo
    </h5>
    <ul>
      {drink?.preparationSteps.map((preparationStep) => (
        <li key={preparationStep.order} className="relative pb-2 pl-7">
          <div className="absolute left-0 top-[-2px] font-serif text-2xl font-bold text-slate-950">
            {preparationStep.order}
          </div>
          {preparationStep.description}
        </li>
      ))}
    </ul>
  </div>
);

export default DrinkPreparationSteps;
