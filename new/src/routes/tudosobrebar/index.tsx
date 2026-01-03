import { createFileRoute } from '@tanstack/react-router';
import { getKnowledges } from '@/data/getKnowledges';
import KnowledgeCard from '@/components/KnowledgeCard';

export const Route = createFileRoute('/tudosobrebar/')({
  component: TudoSobreBar,
  loader: async () => await getKnowledges(),
  head: () => ({ meta: [{ title: 'Tudo sobre bar - Drinquepedia' }] }),
});

function TudoSobreBar() {
  const data = Route.useLoaderData();

  return (
    <div className="container mx-auto px-3">
      <h1 className="mt-12 font-serif text-3xl font-bold text-gray-700">
        Tudo sobre bar
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {data.knowledges.map((knowledge) => (
          <KnowledgeCard key={knowledge.id} knowledge={knowledge} />
        ))}
      </div>
    </div>
  );
}
