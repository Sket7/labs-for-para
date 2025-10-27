import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/labs/first')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/labs/first"!</div>
}
