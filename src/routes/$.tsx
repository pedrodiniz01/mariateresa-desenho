import { createFileRoute, Link } from "@tanstack/react-router";
import { createNotFoundHead } from "@/lib/seo";

export const Route = createFileRoute("/$")({
  head: ({ params }) =>
    createNotFoundHead({
      path: `/${params._splat ?? ""}`,
    }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
