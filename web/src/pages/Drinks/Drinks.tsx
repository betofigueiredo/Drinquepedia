import { useSearchParams } from "react-router-dom";
import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import useSearchStore from "@/stores/useSearchStore";
import DrinkRow from "@/components/DrinkRow";
import Pagination from "@/components/Pagination";
import HighlightCard from "@/components/HighlightCard";

const Drinks = ({ category }: { category?: string }) => {
  const PER_PAGE = 20;
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const name = searchParams.get("name") ?? "";
  const { calories, alcoholicContent } = useSearchStore();
  const { isPending, error, data } = useGetDrinks({
    page,
    perPage: PER_PAGE,
    category,
    name,
    calories,
    alcoholicContent,
  });
  const drinks = data?.drinks;

  return (
    <>
      {!category && <SearchBar />}
      <div className="container">
        {isPending && <div>Carregando...</div>}
        {error && <div>Erro</div>}
        {!isPending && !error && (
          <div className="grid grid-cols-[auto,313px] gap-4">
            <div>
              <h1 className="font-serif font-bold text-3xl text-gray-700 mt-14 mb-14">
                {category || "Todos os drinks"}
              </h1>
              {drinks?.map((drink) => (
                <DrinkRow key={drink.id} drink={drink} />
              ))}
              <Pagination
                category={category}
                page={page}
                perPage={PER_PAGE}
                totalCount={data?.metadata?.totalCount || 0}
              />
            </div>
            <div className="mt-24">
              <HighlightCard
                highlight={{
                  id: "6",
                  oldId: 6,
                  type: "GENERAL",
                  title: "TOP 10 TROPICAIS",
                  subtitle:
                    "Confira nossa lista dos 10 melhores drinques tropicais para esse verão. Não deixe de experimentar. Confira já e divirta-se!",
                  description: "",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Drinks;
