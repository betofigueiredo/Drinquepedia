import { z } from 'zod';
import { createFileRoute, useSearch } from '@tanstack/react-router';
import { getDrinks } from '@/data/getDrinks';
import SearchBar from '@/components/SearchBar';
import DrinksList from '@/components/DrinksList';
import DrinksListHighlights from '@/components/DrinksListHighlights';

export const Route = createFileRoute('/drinques/AaZ')({
  component: AaZ,
  validateSearch: z.object({
    pagina: z.number().catch(1),
    busca: z.coerce.string().optional(),
    calorias: z.coerce.string().optional(),
    teor: z.coerce.string().optional(),
  }),
  loaderDeps: ({ search }) => ({
    page: search.pagina,
    search: search.busca,
    calories: search.calorias,
    alcoholicContent: search.teor,
  }),
  loader: async ({ deps }) => await getDrinks({ data: deps }),
});

function AaZ() {
  const data = Route.useLoaderData();
  const search = useSearch({ from: '/drinques/AaZ' });
  const page = search.pagina;

  return (
    <>
      <SearchBar />
      <div className="container px-3 mx-auto">
        <div className="grid grid-cols-[1fr_300px] gap-24">
          <DrinksList
            drinks={data.drinks}
            totalCount={data.metadata.totalCount || 0}
            page={page}
          />
          <DrinksListHighlights />
        </div>
      </div>
    </>
  );
}
