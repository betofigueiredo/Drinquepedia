import { useSearchParams } from "react-router-dom";
import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import useSearchStore from "@/stores/useSearchStore";
import DrinkRow from "@/components/DrinkRow";
import Pagination from "@/components/Pagination";

const Drinks = ({ category }: { category?: string }) => {
  const PER_PAGE = 20;
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { name, calories, alcoholicContent } = useSearchStore();
  const { isPending, error, data } = useGetDrinks({
    page,
    perPage: PER_PAGE,
    category,
    name,
    calories,
    alcoholicContent,
  });
  const drinks = data?.drinks;

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <SearchBar />
      <div>Destaques laterais (caipirinhas e smoothies)</div>
      <div>
        {drinks?.map((drink) => (
          <DrinkRow key={drink.id} drink={drink} />
        ))}
      </div>
      <div>
        <Pagination
          category={category}
          page={page}
          perPage={PER_PAGE}
          totalCount={data?.metadata?.totalCount || 0}
        />
      </div>
    </div>
  );
};

export default Drinks;
