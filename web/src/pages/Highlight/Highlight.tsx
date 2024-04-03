import { Link, useParams } from "react-router-dom";
import useGetHighlight from "@/api/useGetHighlight";
import Loadings from "@/components/Loadings";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const Highlight = () => {
  const { highlightId } = useParams();
  const { isPending, error, data } = useGetHighlight({ highlightId });

  if (isPending) {
    return (
      <div className="container">
        <Loadings.Highlight />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const highlight = data?.highlight;

  return (
    <div className="container mt-2">
      <Breadcrumbs />
      <h1 className="mt-6 font-serif text-3xl font-bold text-gray-700">
        {highlight?.title}
      </h1>
      <p className="mb-6 mt-4 text-gray-600">{highlight?.description}</p>
      {highlight?.drinks?.map((drink) => (
        <div
          key={drink.oldId}
          className="mb-14 grid grid-cols-[max-content_1fr] gap-4 text-gray-700"
        >
          <div className="pr-20 pt-4">
            <Link to={`/drinques/${drink.oldId}`}>
              <img src={`/images/drinks/${drink?.oldId}g.jpg`} />
            </Link>
          </div>
          <div className="mt-4">
            <Link to={`/drinques/${drink.oldId}`}>
              <h2 className="mb-7 mt-6 font-serif text-3xl font-bold text-amber-500">
                {drink?.name}
              </h2>
            </Link>
            <h5 className="mb-3 font-serif text-xl font-bold text-slate-950">
              Ingredientes
            </h5>
            <ul>
              {drink?.ingredients.map((ingredient) => (
                <li key={ingredient.order} className="relative pl-7">
                  <div className="absolute left-0 top-2 size-2 rounded-full border border-gray-300" />
                  {ingredient.quantity || ""}{" "}
                  {ingredient.unitOfMeasurement || ""}
                  {ingredient.unitOfMeasurement ? " de " : " "}
                  {ingredient.ingredientType}
                </li>
              ))}
              {drink?.decoration && (
                <li className="relative pl-7">
                  <div className="absolute left-0 top-2 size-2 rounded-full border border-gray-300" />
                  {drink?.decoration}
                </li>
              )}
            </ul>
            <Link to={`/drinques/${drink.oldId}`}>
              <Button className="mt-6">Veja a receita completa</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlight;
