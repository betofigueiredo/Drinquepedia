import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/tudosobrebar/')({
  component: TudoSobreBar,
});

function TudoSobreBar() {
  return <div>Hello "/tudosobrebar/"!</div>;
}
