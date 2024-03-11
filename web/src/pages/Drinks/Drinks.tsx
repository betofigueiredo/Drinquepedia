import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import useSearchStore from "@/stores/useSearchStore";
import DrinkRow from "@/components/DrinkRow";
import Pagination from "@/components/Pagination";
import { useParams } from "react-router-dom";

const Drinks = () => {
  const PER_PAGE = 20;
  const page = Number(useParams().page) || 1; // TODO:
  const { name, calories, alcoholicContent } = useSearchStore();
  const { isPending, error, data } = useGetDrinks({
    page,
    perPage: PER_PAGE,
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
      <div>
        {drinks?.map((drink) => (
          <DrinkRow key={drink.id} drink={drink} />
        ))}
      </div>
      <div>
        <Pagination
          page={page}
          perPage={PER_PAGE}
          totalCount={data?.metadata?.totalCount || 0}
        />
      </div>
    </div>
  );
};

export default Drinks;
