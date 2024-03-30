import { useParams } from "react-router-dom";
import useGetDrink from "@/api/useGetDrink";
import DrinkView from "@/components/DrinkView";
import Loadings from "@/components/Loadings";
import Breadcrumbs from "@/components/Breadcrumbs";

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
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container pt-3 leading-relaxed">
      <Breadcrumbs
        list={[
          { url: "/drinques", label: "Drinques" },
          { label: drink?.name || "" },
        ]}
      />
      <DrinkView drink={drink} />
    </div>
  );
};

export default Drink;
