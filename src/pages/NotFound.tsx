import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="space-y-2">
        <p className="text-sm font-mono uppercase text-primary">404</p>
        <h1 className="text-3xl font-heading font-semibold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or has been moved. Try
          heading back home.
        </p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Go to homepage
      </Link>
    </main>
  );
}
