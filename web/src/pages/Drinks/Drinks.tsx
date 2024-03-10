import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import useSearchStore from "@/stores/useSearchStore";

const Drinks = () => {
  const { name, calories, alcoholicContent } = useSearchStore();
  const {
    isPending,
    error,
    data: drinks,
  } = useGetDrinks({
    page: 1,
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

  console.log(drinks);

  return (
    <div className="container">
      <SearchBar />
      <div>
        {drinks?.map((drink) => (
          <div key={drink.id}>{drink.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
