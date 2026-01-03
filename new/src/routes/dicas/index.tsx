import { createFileRoute } from '@tanstack/react-router';
import { getInstructions } from '@/data/getInstructions';
import InstructionCard from '@/components/InstructionCard';

export const Route = createFileRoute('/dicas/')({
  component: Dicas,
  loader: async () => await getInstructions(),
  head: () => ({ meta: [{ title: 'Dicas - Drinquepedia' }] }),
});

function Dicas() {
  const data = Route.useLoaderData();

  return (
    <div className="container mx-auto px-3">
      <h1 className="mt-12 font-serif text-3xl font-bold text-gray-700">
        Dicas gerais
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {data.instructions.map((instruction) => (
          <InstructionCard key={instruction.id} instruction={instruction} />
        ))}
      </div>
    </div>
  );
}
