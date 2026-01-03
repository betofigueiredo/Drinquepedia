import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/destaques/')({
  component: Destaques,
});

function Destaques() {
  return <div>Hello "/destaques/"!</div>;
}
