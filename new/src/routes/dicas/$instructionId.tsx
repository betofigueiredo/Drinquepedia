import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dicas/$instructionId')({
  component: Instruction,
});

function Instruction() {
  return <div>Hello "/dicas/$instructionId"!</div>;
}
