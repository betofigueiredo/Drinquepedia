import { useParams } from "react-router-dom";
import useGetDrink from "@/api/useGetDrink";
import Errors from "@/components/Errors";
import Loadings from "@/components/Loadings";
import DrinkView from "@/components/DrinkView";
import SimilarDrinks from "@/components/SimilarDrinks";

const Drink = () => {
  const { drinkId } = useParams();
  const { isPending, error, data: drink } = useGetDrink(drinkId);

  if (isPending) {
    return (
      <div className="container pt-3 leading-relaxed">
        <Loadings.Drink />
      </div>
    );
  }

  if (error) {
    return <Errors />;
  }

  return (
    <div className="container pt-3 leading-relaxed">
      <DrinkView drink={drink} />
      <SimilarDrinks drinkId={drink?.oldId} />
    </div>
  );
};

export default Drink;
