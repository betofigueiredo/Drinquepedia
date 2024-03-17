import { Drink } from "@/types/drink";
import Pagination from "@/components/Pagination";
import DrinkRow from "./components/DrinkRow";

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
  const getCategoryName = (): string => {
    const categories: { [key: string]: string } = {
      martinis: "Martinis",
      tropicais: "Tropicais",
      frozen: "Frozen",
      quentes: "Quentes",
      shot: "Shots",
      classicos: "Clássicos",
      semalcool: "Sem Álcool",
      caipirinhas: "Caipirinhas clássicas",
      smoothies: "Smoothies",
    };
    return (
      categories[category as keyof typeof categories] || "Todos os drinques"
    );
  };

  const drinksList =
    category === "caipirinhas"
      ? drinks?.filter((drink) =>
          drink?.categories?.some((category) => category.name === "caipirinhas")
        )
      : drinks;
  const iceCreamCaipirinhas =
    category === "caipirinhas"
      ? drinks?.filter((drink) =>
          drink?.categories?.some(
            (category) => category.name === "scaipirinhas"
          )
        )
      : [];
  const count = category === "caipirinhas" ? drinksList?.length : totalCount;

  return (
    <div>
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-14 mb-0">
        {getCategoryName()}
      </h1>
      <div className="mb-12 text-gray-500">{count} drinques</div>
      {drinksList?.map((drink) => (
        <DrinkRow key={drink.id} drink={drink} />
      ))}
      {iceCreamCaipirinhas?.length ? (
        <>
          <h1 className="font-serif font-bold text-3xl text-gray-700 mt-24 mb-0">
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
