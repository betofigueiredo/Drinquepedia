import { useSearchParams } from "react-router-dom";
import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import DrinksList from "@/components/DrinksList";
import HighlightCard from "@/components/HighlightCard";

const Drinks = ({ category }: { category?: string }) => {
  const perPage = category === "caipirinhas" ? 50 : 20;
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const name = searchParams.get("name") ?? "";
  const calories = searchParams.get("calories") ?? "";
  const alcoholicContent = searchParams.get("alcoholicContent") ?? "";
  const { isPending, error, data } = useGetDrinks({
    page,
    perPage,
    category,
    name,
    calories,
    alcoholicContent,
  });

  return (
    <>
      {!category && <SearchBar />}
      <div className="container">
        {isPending && <div>Carregando...</div>}
        {error && <div>Erro</div>}
        {!isPending && !error && (
          <div className="grid grid-cols-[auto,300px] gap-24">
            <DrinksList
              drinks={data?.drinks}
              totalCount={data?.metadata?.totalCount || 0}
              category={category}
              page={page}
              perPage={perPage}
            />
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
