import useGetSimilarDrinks from "@/api/useGetSimilarDrinks";
import DrinkRow from "@/components/DrinkRow";
import Loadings from "@/components/Loadings";

const SimilarDrinks = ({ drinkId }: { drinkId?: number }) => {
  const { isPending, isRefetching, data } = useGetSimilarDrinks(drinkId);
  const drinks = data?.drinks || [];

  return (
    <div className="mt-14 grid gap-4 text-gray-700 md:grid-cols-[max-content_1fr]">
      <div className="w-[359px] pt-4 md:pr-36" />
      <div>
        {isPending || isRefetching ? (
          <Loadings.Drinks />
        ) : (
          <>
            <hr className="my-9 mb-20 w-full max-w-xs border-2 border-t border-gray-100" />
            <h1 className="mb-7 mt-10 font-serif text-2xl font-bold text-slate-900">
              Drinques similares
            </h1>
            {drinks?.map((drink) => <DrinkRow key={drink.id} drink={drink} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default SimilarDrinks;
