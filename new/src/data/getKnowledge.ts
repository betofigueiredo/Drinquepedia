import { createServerFn } from '@tanstack/react-start';
import { knowledges } from './knowledges';

type Params = {
  knowledgeSlug: string;
};

export const getKnowledge = createServerFn({ method: 'GET' })
  .inputValidator((data: Params) => data)
  .handler(async ({ data }) => {
    const knowledge = knowledges.find((k) => k.slug === data.knowledgeSlug);
    return { knowledge: !knowledge ? null : knowledge };
  });
