import useGetDrink from "@/api/useGetDrink";

const Drink = () => {
  const { isPending, error, data: drink } = useGetDrink();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4">
        <div>01</div>
        <div>
          <div>{drink?.name}</div>
          <div className="grid grid-cols-3">
            <div>{drink?.calories}</div>
            <div>{drink?.alcoholicContent}</div>
            <div>{drink?.difficulty}</div>
          </div>
          <div>imagem</div>
          <div>imagem</div>
          <div>imagem</div>
        </div>
      </div>
    </div>
  );
};

export default Drink;
