import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/labs/second')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/labs/second"!</div>
}
