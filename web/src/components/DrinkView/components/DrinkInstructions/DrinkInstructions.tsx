import { Link } from "react-router-dom";
import { Drink } from "@/types/drink";

const DrinkInstructions = ({ drink }: { drink?: Drink }) => {
  if (!drink?.instructions?.length) {
    return null;
  }

  return (
    <>
      <div className="my-9 w-32 border-t border-dashed border-gray-200" />
      <div>
        <h5 className="mb-1 font-serif text-2xl font-bold text-slate-950">
          Dicas para o preparo
        </h5>
        <ul>
          {drink?.instructions.map((instruction) => (
            <li key={instruction.id} className="pb-1">
              <span className="pr-1 text-3xl text-gray-400">→</span>
              <Link
                to={`/dicas/${instruction.oldId}`}
                className="text-slate-800 underline transition-all hover:text-amber-500"
              >
                {instruction.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DrinkInstructions;
