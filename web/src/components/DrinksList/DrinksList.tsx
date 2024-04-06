import { Drink } from "@/types/drink";
import Pagination from "@/components/Pagination";
import DrinkRow from "@/components/DrinkRow";
import getCategoryName from "@/utils/getCategoryName";

const DrinksList = ({
  drinks,
  totalCount,
  category,
  page,
  perPage,
}: {
  drinks?: Drink[];
  totalCount: number;
  category?: string;
  page: number;
  perPage: number;
}) => {
  const drinksList =
    category === "caipirinhas"
      ? drinks?.filter((drink) =>
          drink?.categories?.some((category) => category === "caipirinhas"),
        )
      : drinks;
  const iceCreamCaipirinhas =
    category === "caipirinhas"
      ? drinks?.filter((drink) =>
          drink?.categories?.some((category) => category === "scaipirinhas"),
        )
      : [];
  const count = category === "caipirinhas" ? drinksList?.length : totalCount;

  return (
    <div>
      <h1 className="mb-0 mt-14 font-serif text-3xl font-bold text-gray-700">
        {getCategoryName(category)}
      </h1>
      <div className="mb-12 text-gray-500">{count} drinques</div>
      {drinksList?.map((drink) => <DrinkRow key={drink.id} drink={drink} />)}
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
      <Pagination
        category={category}
        page={page}
        perPage={perPage}
        totalCount={totalCount}
      />
    </div>
  );
};

export default DrinksList;
