import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/labs/third')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/labs/third"!</div>
}
