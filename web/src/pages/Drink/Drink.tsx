import { useParams } from "react-router-dom";
import useGetDrink from "@/api/useGetDrink";
import DrinkView from "@/components/DrinkView";
import Loadings from "@/components/Loadings";

const Drink = () => {
  const { drinkId } = useParams();
  const { isPending, error, data: drink } = useGetDrink(drinkId);

  if (isPending) {
    return (
      <div className="container leading-relaxed pt-3">
        <Loadings.Drink />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container leading-relaxed pt-3">
      <DrinkView drink={drink} />
    </div>
  );
};

export default Drink;
