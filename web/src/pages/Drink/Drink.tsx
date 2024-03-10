import useGetDrink from "@/api/useGetDrink";
import DrinkAlcoholicContent from "@/components/DrinkAlcoholicContent";
import DrinkDifficulty from "@/components/DrinkDifficulty";

const Drink = () => {
  const { isPending, error, data: drink } = useGetDrink();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container leading-relaxed text-gray-700 pt-3">
      <div className="grid grid-cols-[max-content_1fr] gap-4">
        <div className="pr-36 pt-4">
          <img src="https://www.drinquepedia.com/drinques/fotos/392/392g.jpg" />
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
              <DrinkAlcoholicContent
                alcoholicContent={drink?.alcoholicContent}
              />
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-slate-950">
                Dificuldade
              </div>
              <DrinkDifficulty difficulty={drink?.difficulty} />
            </div>
          </div>
          <div className="w-32 border-dashed border-t border-gray-200 mt-8 mb-8" />
          <div>
            <h5 className="font-serif font-bold text-2xl text-slate-950 mb-3">
              Ingredientes
            </h5>
            <ul>
              {drink?.ingredients.map((ingredient) => (
                <li key={ingredient.order} className="relative pl-7">
                  <div className="absolute left-0 top-2 w-2 h-2 border-gray-300 border rounded-full" />
                  {ingredient.quantity || ""}{" "}
                  {ingredient.unitOfMeasurement || ""}
                  {ingredient.unitOfMeasurement ? " de " : " "}
                  {ingredient.ingredientType}
                </li>
              ))}
              <li className="relative pl-7">
                <div className="absolute left-0 top-2 w-2 h-2 border-gray-300 border rounded-full" />
                {drink?.decoration}
              </li>
            </ul>
          </div>
          <div className="w-32 border-dashed border-t border-gray-200 mt-8 mb-8" />
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
          <div className="w-32 border-dashed border-t border-gray-200 mt-8 mb-8" />
          <div>
            <h5 className="font-serif font-bold text-2xl text-slate-950 mb-3">
              Sobre o drinque
            </h5>
            <div className="text-slate-950 pl-8 relative">
              <div className="absolute top-0 left-0 font-serif font-bold text-5xl text-amber-500 mb-3">
                “
              </div>

              {drink?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drink;
