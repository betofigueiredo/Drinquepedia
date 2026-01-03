import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dicas/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dicas/"!</div>
}
