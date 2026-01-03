import type { Drink } from '@/types/drink';

const DrinkDescription = ({ drink }: { drink?: Drink }) => {
  if (!drink?.description) {
    return null;
  }

  return (
    <>
      <div className="my-9 w-32 border-t border-dashed border-gray-200" />
      <div>
        <h5 className="mb-3 font-serif text-2xl font-bold text-slate-950">
          Sobre o drinque
        </h5>
        <div className="relative whitespace-pre-line pl-8 text-slate-950">
          <div className="absolute left-0 top-0 mb-3 font-serif text-5xl font-bold text-amber-500">
            “
          </div>
          {drink.description}
        </div>
      </div>
    </>
  );
};

export default DrinkDescription;
