import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/drinques/festas')({
  component: Festas,
  beforeLoad: ({ search }) => {
    throw redirect({
      to: '/destaques',
      search,
    });
  },
});

function Festas() {
  return null;
}
