import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";
import useSearchStore from "@/stores/useSearchStore";

const Drinks = () => {
  const { name, calories } = useSearchStore();
  const {
    isPending,
    error,
    data: drinks,
  } = useGetDrinks({
    page: 1,
    name,
    calories,
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
    </div>
  );
};

export default Drinks;
