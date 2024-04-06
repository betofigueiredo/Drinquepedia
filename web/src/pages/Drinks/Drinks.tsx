import { useSearchParams } from "react-router-dom";
import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import DrinksList from "@/components/DrinksList";
import DrinksListHighlights from "@/components/DrinksListHighlights";
import Loadings from "@/components/Loadings";
import Errors from "@/components/Errors";

const Drinks = ({ category }: { category?: string }) => {
  const perPage = category === "caipirinhas" ? 50 : 20;
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("pagina")) || 1;
  const search = searchParams.get("busca") ?? "";
  const calories = searchParams.get("calorias") ?? "";
  const alcoholicContent = searchParams.get("teor") ?? "";
  const { isPending, error, data } = useGetDrinks({
    page,
    perPage,
    category,
    search,
    calories,
    alcoholicContent,
  });

  return (
    <>
      {!category && <SearchBar />}
      <div className="container">
        {isPending && <Loadings.Drinks />}
        {error && <Errors />}
        {!isPending && !error && (
          <div className="grid gap-24 md:grid-cols-[auto,300px]">
            <DrinksList
              drinks={data?.drinks}
              totalCount={data?.metadata?.totalCount || 0}
              category={category}
              page={page}
              perPage={perPage}
            />
            <DrinksListHighlights category={category} />
          </div>
        )}
      </div>
    </>
  );
};

export default Drinks;
