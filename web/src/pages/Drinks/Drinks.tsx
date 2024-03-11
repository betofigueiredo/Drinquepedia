import { useState } from "react";
import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import useSearchStore from "@/stores/useSearchStore";
import DrinkRow from "@/components/DrinkRow";
import Pagination from "@/components/Pagination";

const Drinks = () => {
  const { name, calories, alcoholicContent } = useSearchStore();
  const [page, setPage] = useState<number>(1);
  const {
    isPending,
    error,
    data: drinks,
  } = useGetDrinks({
    page,
    name,
    calories,
    alcoholicContent,
  });

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
        <Pagination />
      </div>
    </div>
  );
};

export default Drinks;
