import { createFileRoute } from '@tanstack/react-router';
import { getInstruction } from '@/data/getInstruction';
import Breadcrumbs from '@/components/Breadcrumbs';
import Errors from '@/components/Errors';

export const Route = createFileRoute('/dicas/$instructionId')({
  component: Instruction,
  loader: async ({ params: { instructionId } }) =>
    await getInstruction({ data: { instructionId: Number(instructionId) } }),
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.instruction?.title} - Drinquepedia` }],
  }),
});

function Instruction() {
  const data = Route.useLoaderData();
  const instruction = data.instruction;

  if (!instruction) {
    return <Errors />;
  }

  return (
    <div className="container mx-auto px-3 mt-2">
      <Breadcrumbs origin="dicas" />
      <h1 className="mt-6 font-serif text-3xl font-bold text-gray-700">
        {instruction.title}
      </h1>
      <p
        className="mb-6 mt-8 text-gray-600"
        dangerouslySetInnerHTML={{ __html: instruction.description || '' }}
      />
    </div>
  );
}
