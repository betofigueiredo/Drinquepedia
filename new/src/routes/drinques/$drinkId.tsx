import { createFileRoute } from '@tanstack/react-router';
import DrinkView from '@/components/DrinkView';
import Errors from '@/components/Errors';
import SimilarDrinks from '@/components/SimilarDrinks';
import { getDrink } from '@/data/getDrink';

export const Route = createFileRoute('/drinques/$drinkId')({
  component: Drink,
  loader: async ({ params: { drinkId } }) =>
    await getDrink({ data: { drinkId: Number(drinkId) } }),
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.drink?.name} - Drinquepedia` }],
  }),
});

function Drink() {
  const data = Route.useLoaderData();
  const drink = data.drink;
  const similarDrinks = data.similarDrinks;

  if (!drink) {
    return <Errors />;
  }

  return (
    <div className="container mx-auto px-3 pt-3 leading-relaxed">
      <DrinkView drink={drink} />
      <SimilarDrinks similarDrinks={similarDrinks} />
    </div>
  );
}
