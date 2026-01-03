import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/drinques/caipirinhas/classicas')({
  component: CaipirinhasClassicas,
  beforeLoad: ({ search }) => {
    throw redirect({
      to: '/drinques/caipirinhas',
      search,
    });
  },
});

function CaipirinhasClassicas() {
  return null;
}
