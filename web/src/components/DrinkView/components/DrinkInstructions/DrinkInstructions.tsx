import { Link } from "react-router-dom";
import { Drink } from "@/types/drink";

const DrinkInstructions = ({ drink }: { drink?: Drink }) => {
  if (!drink?.instructions?.length) {
    return null;
  }

  return (
    <>
      <div className="w-32 border-dashed border-t border-gray-200 mt-9 mb-9" />
      <div>
        <h5 className="font-serif font-bold text-2xl text-slate-950 mb-1">
          Dicas para o preparo
        </h5>
        <ul>
          {drink?.instructions.map((instruction) => (
            <li key={instruction.id} className="pb-1">
              <span className="text-3xl pr-1 text-gray-400">→</span>
              <Link
                to={`/dicas/${instruction.oldId}`}
                className="text-slate-800 underline hover:text-amber-500 transition-all"
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
