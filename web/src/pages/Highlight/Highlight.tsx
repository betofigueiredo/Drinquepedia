import { Link, useParams } from "react-router-dom";
import useGetHighlight from "@/api/useGetHighlight";
import { Button } from "@/components/ui/button";

const Highlight = () => {
  const { highlightId } = useParams();
  const { isPending, error, data } = useGetHighlight({ highlightId });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const highlight = data?.highlight;

  return (
    <div className="container">
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-12">
        {highlight?.title}
      </h1>
      <p className="text-gray-600 mt-4 mb-6">{highlight?.description}</p>
      {highlight?.drinks?.map((drink) => (
        <div
          key={drink.oldId}
          className="grid grid-cols-[max-content_1fr] gap-4 mb-14 text-gray-700"
        >
          <div className="pr-20 pt-4">
            <Link to={`/drinques/${drink.oldId}`}>
              <img
                src={`/images/drinks/${drink?.oldId}/${drink?.oldId}g.jpg`}
              />
            </Link>
          </div>
          <div className="mt-4">
            <Link to={`/drinques/${drink.oldId}`}>
              <h2 className="font-serif font-bold text-3xl text-amber-500 mt-6 mb-7">
                {drink?.name}
              </h2>
            </Link>
            <h5 className="font-serif font-bold text-xl text-slate-950 mb-3">
              Ingredientes
            </h5>
            <ul>
              {drink?.ingredients.map((ingredient) => (
                <li key={ingredient.order} className="relative pl-7">
                  <div className="absolute left-0 top-2 w-2 h-2 border-gray-300 border rounded-full" />
                  {ingredient.quantity || ""}{" "}
                  {ingredient.unitOfMeasurement || ""}
                  {ingredient.unitOfMeasurement ? " de " : " "}
                  {ingredient.ingredientType}
                </li>
              ))}
              {drink?.decoration && (
                <li className="relative pl-7">
                  <div className="absolute left-0 top-2 w-2 h-2 border-gray-300 border rounded-full" />
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
