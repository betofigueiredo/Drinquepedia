import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/drinques/caipirinhas/sorvete')({
  component: CaipirinhasSorvete,
  beforeLoad: ({ search }) => {
    throw redirect({
      to: '/drinques/caipirinhas',
      search,
    });
  },
});

function CaipirinhasSorvete() {
  return null;
}
