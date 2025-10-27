import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <nav
      style={{
        display: "flex",
        flex: 1,
        gap: "1rem",
        borderBottom: "1px solid #ccc",
        padding: "1rem",
      }}
    >
      <Link
        to="/labs/first"
        style={{
          padding: "0.5rem 1rem",
          color: "#007bff",
          textDecoration: "none",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
      >
        first
      </Link>
      <Link to="/labs/second">second</Link>
      <Link to="/labs/third">third</Link>
    </nav>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
