import { createFileRoute } from '@tanstack/react-router';
import { getKnowledge } from '@/data/getKnowledge';
import Breadcrumbs from '@/components/Breadcrumbs';
import Errors from '@/components/Errors';

export const Route = createFileRoute('/tudosobrebar/$knowledgeSlug')({
  component: Knowledge,
  loader: async ({ params: { knowledgeSlug } }) =>
    await getKnowledge({ data: { knowledgeSlug: knowledgeSlug } }),
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.knowledge?.title} - Drinquepedia` }],
  }),
});

function Knowledge() {
  const data = Route.useLoaderData();
  const knowledge = data.knowledge;

  if (!knowledge) {
    return <Errors />;
  }

  return (
    <div className="container mx-auto px-3 mt-2">
      <Breadcrumbs origin="tudosobrebar" />
      <h1 className="mt-6 font-serif text-3xl font-bold text-gray-700">
        {knowledge.title}
      </h1>
      <p
        className="mb-6 mt-8 text-gray-600"
        dangerouslySetInnerHTML={{ __html: knowledge.description || '' }}
      />
    </div>
  );
}
