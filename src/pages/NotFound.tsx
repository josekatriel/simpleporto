import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl md:h-96 md:w-96" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-72 w-72 rounded-full bg-secondary/20 blur-3xl md:bottom-[-10rem] md:right-[-8rem] md:h-96 md:w-96" />
        <div className="absolute left-[-8rem] bottom-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl md:left-[-10rem] md:h-80 md:w-80" />
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10 px-6 py-24 text-center sm:px-10">
        <div className="w-full max-w-lg space-y-6">
          <p className="relative text-6xl font-heading font-semibold tracking-tight text-foreground sm:text-9xl">
            4<span className="text-primary">0</span>4
          </p>

          <div className="space-y-4">
            <h1 className="text-3xl font-heading font-semibold sm:text-5xl">
              Looks like you took a wrong turn
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
              This section of the portfolio is either under construction or no
              longer exists. Let&apos;s get you back to exploring the work and
              stories that brought you here.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            Back to homepage
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center justify-center border border-border bg-card/80 px-8 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            View recent work
          </Link>
        </div>
      </div>
    </main>
  );
}
