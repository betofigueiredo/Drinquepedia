import { z } from 'zod';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/drinques/')({
  component: Drinques,
  validateSearch: z.object({
    pagina: z.number().catch(1),
    busca: z.coerce.string().optional(),
    calorias: z.coerce.string().optional(),
    teor: z.coerce.string().optional(),
  }),
  beforeLoad: ({ search }) => {
    throw redirect({
      to: '/drinques/AaZ',
      search,
    });
  },
});

function Drinques() {
  return null;
}
