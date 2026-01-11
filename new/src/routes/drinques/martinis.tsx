import { z } from 'zod';
import { createFileRoute, useSearch } from '@tanstack/react-router';
import { getDrinks } from '@/data/getDrinks';
import DrinksList from '@/components/DrinksList';
import DrinksListHighlights from '@/components/DrinksListHighlights';

export const Route = createFileRoute('/drinques/martinis')({
  component: Martinis,
  validateSearch: z.object({ pagina: z.number().catch(1) }),
  loaderDeps: ({ search }) => ({ page: search.pagina }),
  loader: async ({ deps }) =>
    await getDrinks({ data: { category: 'martinis', page: deps.page } }),
  head: () => ({ meta: [{ title: 'Martinis - Drinquepedia' }] }),
});

function Martinis() {
  const data = Route.useLoaderData();
  const search = useSearch({ from: '/drinques/martinis' });
  const page = search.pagina;

  return (
    <div className="container px-3 mx-auto">
      <div className="grid grid-cols-[1fr_300px] gap-24">
        <DrinksList
          drinks={data.drinks}
          totalCount={data.metadata.totalCount || 0}
          category="martinis"
          page={page}
        />
        <DrinksListHighlights />
      </div>
    </div>
  );
}
