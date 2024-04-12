import { Link, Outlet, RootRoute } from "@tanstack/react-router";

export const Route = new RootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/contact" className="[&.active]:font-bold">
        Contact
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
});
