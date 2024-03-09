import useGetDrinks from "@/api/useGetDrinks";
import SearchBar from "@/components/SearchBar";

const Drinks = () => {
  const {
    isPending,
    error,
    data: drinks,
  } = useGetDrinks({
    page: 1,
    perPage: 10,
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
