import { useSearchParams } from "react-router-dom";
import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import DrinksList from "@/components/DrinksList";
import DrinksListHighlights from "@/components/DrinksListHighlights";
import Loadings from "@/components/Loadings";

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
        {isPending && <Loadings.Drinks />}
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
            <DrinksListHighlights category={category} />
          </div>
        )}
      </div>
    </>
  );
};

export default Drinks;
