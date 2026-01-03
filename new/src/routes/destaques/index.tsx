import { createFileRoute } from '@tanstack/react-router';
import { getHighlights } from '@/data/getHighlights';
import HighlightCard from '@/components/HighlightCard';

export const Route = createFileRoute('/destaques/')({
  component: Destaques,
  loader: async () => await getHighlights(),
  head: () => ({ meta: [{ title: 'Destaques - Drinquepedia' }] }),
});

function Destaques() {
  const data = Route.useLoaderData();

  const specialOccasions = data.highlights.filter(
    (hightlight) => hightlight.type === 'SPECIAL_OCCASION',
  );
  const generalHighlights = data.highlights.filter(
    (hightlight) => hightlight.type === 'GENERAL',
  );

  return (
    <div className="container mx-auto px-3">
      <h1 className="mt-12 font-serif text-3xl font-bold text-gray-700">
        Ocasiões especiais
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {specialOccasions.map((specialOccasion) => (
          <HighlightCard key={specialOccasion.id} highlight={specialOccasion} />
        ))}
      </div>
      <h1 className="mt-20 font-serif text-3xl font-bold text-gray-700">
        Dicas do barman
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {generalHighlights.map((generalHighlight) => (
          <HighlightCard
            key={generalHighlight.id}
            highlight={generalHighlight}
          />
        ))}
      </div>
    </div>
  );
}
