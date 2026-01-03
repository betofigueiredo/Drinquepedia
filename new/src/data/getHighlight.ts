import { createServerFn } from '@tanstack/react-start';
import { highlights } from './highlights';

type Params = {
  hightlightId: number;
};

export const getHighlight = createServerFn({ method: 'GET' })
  .inputValidator((data: Params) => data)
  .handler(async ({ data }) => {
    const highlight = highlights.find((h) => h.oldId === data.hightlightId);
    return { highlight: !highlight ? null : highlight };
  });
