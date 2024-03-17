import { Drink } from "@/types/drink";

const DrinkDescription = ({ drink }: { drink?: Drink }) => {
  if (!drink?.description) {
    return null;
  }

  return (
    <div>
      <h5 className="font-serif font-bold text-2xl text-slate-950 mb-3">
        Sobre o drinque
      </h5>
      <div className="text-slate-950 pl-8 relative whitespace-pre-line">
        <div className="absolute top-0 left-0 font-serif font-bold text-5xl text-amber-500 mb-3">
          “
        </div>
        {drink?.description}
      </div>
    </div>
  );
};

export default DrinkDescription;
