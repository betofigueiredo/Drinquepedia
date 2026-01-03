import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/dicadobarman')({
  component: DicaDoBarman,
  beforeLoad: ({ search }) => {
    throw redirect({
      to: '/destaques',
      search,
    });
  },
});

function DicaDoBarman() {
  return null;
}
