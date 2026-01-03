import type { Drink } from '@/types/drink';
import Pagination from '@/components/Pagination';
import DrinkRow from '@/components/DrinkRow';
import getCategoryName from '@/utils/getCategoryName';

type Props = {
  drinks?: Array<Drink>;
  totalCount: number;
  category?: string;
  page: number;
};

const DrinksList = ({ drinks, totalCount, category, page }: Props) => {
  const drinksList =
    category === 'caipirinhas'
      ? drinks?.filter((drink) =>
          drink.categories.some((c) => c === 'caipirinhas'),
        )
      : drinks;
  const iceCreamCaipirinhas =
    category === 'caipirinhas'
      ? drinks?.filter((drink) =>
          drink.categories.some((c) => c === 'scaipirinhas'),
        )
      : [];
  const count = category === 'caipirinhas' ? drinksList?.length : totalCount;

  return (
    <div>
      <h1 className="mb-0 mt-14 font-serif text-3xl font-bold text-gray-700">
        {getCategoryName(category)}
      </h1>
      <div className="mb-12 text-gray-500">{count} drinques</div>
      {drinksList?.map((drink) => (
        <DrinkRow key={drink.id} drink={drink} />
      ))}
      {iceCreamCaipirinhas?.length ? (
        <>
          <h1 className="mb-0 mt-24 font-serif text-3xl font-bold text-gray-700">
            Caipirinhas com sorvete
          </h1>
          <div className="mb-12 text-gray-500">
            {iceCreamCaipirinhas.length} drinques
          </div>
        </>
      ) : null}
      {iceCreamCaipirinhas?.map((drink) => (
        <DrinkRow key={drink.id} drink={drink} />
      ))}
      {drinksList?.length === 0 && (
        <div className="text-gray-500">Nenhum drinque encontrado.</div>
      )}
      <Pagination category={category} page={page} totalCount={totalCount} />
    </div>
  );
};

export default DrinksList;
