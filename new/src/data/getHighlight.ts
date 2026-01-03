import { createServerFn } from '@tanstack/react-start';
import { highlights } from './highlights';

type Params = {
  highlightId: number;
};

export const getHighlight = createServerFn({ method: 'GET' })
  .inputValidator((data: Params) => data)
  .handler(async ({ data }) => {
    const highlight = highlights.find((h) => h.oldId === data.highlightId);
    return { highlight: !highlight ? null : highlight };
  });
