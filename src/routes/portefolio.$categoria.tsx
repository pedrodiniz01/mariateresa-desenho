import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { loadCategoria } from "@/data/portfolio/load-categoria";
import type { Categoria, PortfolioImage } from "@/data/portfolio/types";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createNotFoundHead,
  createPageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/portefolio/$categoria")({
  loader: async ({ params }) => {
    const cat = await loadCategoria(params.categoria);
    return { cat, slug: params.categoria };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.cat;
    const slug = loaderData?.slug ?? "desconhecido";
    const path = `/portefolio/${slug}`;

    if (!cat) {
      return createNotFoundHead({
        title: "Categoria não encontrada — Maria Teresa Desenho",
        path,
      });
    }

    const title = `${cat.titulo} — Maria Teresa Desenho`;
    const description = cat.descricao;

    return createPageHead({
      title,
      description,
      path,
      image: cat.imagens[0]?.src,
      imageAlt: cat.imagens[0]?.alt,
      type: "website",
      jsonLd: [
        createBreadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Portefólio", path: "/#portefolio" },
          { name: cat.titulo, path },
        ]),
        createCollectionPageJsonLd({
          title,
          description,
          path,
          images: cat.imagens,
        }),
      ],
    });
  },
  component: CategoriaPage,
});

function CategoriaNotFound({ slug }: { slug: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Categoria não encontrada</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        A categoria «{slug}» não existe no portefólio.
      </p>
      <Link
        to="/"
        hash="portefolio"
        className="mt-8 inline-block text-sm uppercase tracking-[0.22em] hover:text-accent"
      >
        ← Ver portefólio
      </Link>
    </div>
  );
}

function CategoriaPage() {
  const { cat, slug } = Route.useLoaderData();
  if (!cat) return <CategoriaNotFound slug={slug} />;
  return <CategoriaGallery cat={cat} />;
}

function CategoriaGallery({ cat }: { cat: Categoria }) {
  const [zoomed, setZoomed] = useState<PortfolioImage | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!zoomed) return;
    setScale(1);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomed]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-display text-2xl">Maria Teresa Desenho</span>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Atelier
            </span>
          </Link>
          <Link
            to="/"
            hash="portefolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao portefólio
          </Link>
        </div>
      </header>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-accent">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3 w-3" />
              </li>
              <li>
                <Link to="/" hash="portefolio" className="transition-colors hover:text-accent">
                  Portefólio
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3 w-3" />
              </li>
              <li>
                <span aria-current="page" className="text-foreground">
                  {cat.titulo}
                </span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Portefólio</p>
          <h1 className="font-display text-5xl sm:text-6xl">
            {cat.titulo}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {cat.intro}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.imagens.map((img, i) => (
              <figure key={i} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setZoomed(img)}
                  className="block w-full cursor-zoom-in"
                  aria-label={`Ampliar imagem: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </button>
              </figure>
            ))}
          </div>
          <p className="mt-16 text-center text-sm italic text-muted-foreground">
            Mais imagens em breve.
          </p>
          <div className="mt-10 text-center">
            <Link
              to="/"
              hash="contactos"
              className="inline-flex items-center rounded-sm bg-foreground px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Entrar em contacto
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-xs text-muted-foreground lg:px-10">
          © {new Date().getFullYear()} Maria Teresa Desenho. Todos os direitos reservados.
        </div>
      </footer>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt}
          onClick={() => setZoomed(null)}
          className="fixed inset-0 z-50 overflow-auto overscroll-contain bg-background/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(null);
            }}
            aria-label="Fechar"
            className="fixed right-6 top-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground transition-colors hover:text-accent"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex min-h-full w-full items-center justify-center">
            <img
              src={zoomed.src}
              alt={zoomed.alt}
              onClick={(e) => {
                e.stopPropagation();
                setScale((s) => (s === 1 ? 2.5 : 1));
              }}
              style={{
                maxHeight: scale === 1 ? "92vh" : "none",
                maxWidth: scale === 1 ? "92vw" : "none",
                width: scale === 1 ? "auto" : `${scale * 100}vw`,
                height: "auto",
              }}
              className={`object-contain transition-transform duration-200 select-none ${
                scale === 1 ? "cursor-zoom-in" : "cursor-zoom-out"
              }`}
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
