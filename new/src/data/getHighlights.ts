import { createServerFn } from '@tanstack/react-start';
import { highlights } from './highlights';

export const getHighlights = createServerFn({ method: 'GET' }).handler(
  async () => ({ highlights }),
);
