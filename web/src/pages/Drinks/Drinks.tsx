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

  const getCategoryName = (): string => {
    const categories: { [key: string]: string } = {
      martinis: "Martinis",
      tropicais: "Tropicais",
      frozen: "Frozen",
      quentes: "Quentes",
      shot: "Shots",
      classicos: "Clássicos",
      semalcool: "Sem Álcool",
      caipirinhas: "Caipirinhas",
      smoothies: "Smoothies",
    };
    return categories[category as keyof typeof categories] || "Todos os drinks";
  };

  return (
    <>
      {!category && <SearchBar />}
      <div className="container">
        {isPending && <div>Carregando...</div>}
        {error && <div>Erro</div>}
        {!isPending && !error && (
          <div className="grid grid-cols-[auto,300px] gap-24">
            <div>
              <h1 className="font-serif font-bold text-3xl text-gray-700 mt-14 mb-0">
                {getCategoryName()}
              </h1>
              <div className="mb-14 text-gray-500">
                {data?.metadata?.totalCount} drinques
              </div>
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
            <div className="mt-20">
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
              <div className="mb-16" />
              <HighlightCard
                highlight={{
                  id: "109",
                  oldId: 109,
                  type: "GENERAL",
                  title: "CLÁSSICOS",
                  subtitle:
                    "Conheça os drinques clássicos que nunca saem de moda. Daiquiri, Mojito, Margarita, Negroni e muito mais. Confira já!",
                  description: "",
                  customUrl: "/drinques/classicos",
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
