import { createServerFn } from '@tanstack/react-start';
import { knowledges } from './knowledges';

export const getKnowledges = createServerFn({ method: 'GET' }).handler(
  async () => ({ knowledges }),
);
