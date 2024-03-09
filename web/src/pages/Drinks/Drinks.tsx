import useGetDrinks from "@/api/useGetDrinks";

const Drinks = () => {
  const { isPending, error, data: drinks } = useGetDrinks();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(drinks);

  return <div className="container">asdasdasdasd drinks w</div>;
};

export default Drinks;
