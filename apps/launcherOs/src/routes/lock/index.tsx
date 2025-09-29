import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lock/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/lock/"!</div>;
}
