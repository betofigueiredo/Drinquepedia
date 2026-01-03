import { createServerFn } from '@tanstack/react-start';
import { instructions } from './instructions';

export const getInstructions = createServerFn({ method: 'GET' }).handler(
  async () => ({ instructions }),
);
