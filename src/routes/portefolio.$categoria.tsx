import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import portfolioQuadrosAsset from "@/assets/portfolio-quadros.jpg";
const portfolioQuadros = portfolioQuadrosAsset;
import poster01 from "@/assets/poster-01.jpg";
import poster02 from "@/assets/poster-02.jpg";
import poster03 from "@/assets/poster-03.jpg";
import poster04 from "@/assets/poster-04.jpg";
import poster05 from "@/assets/poster-05.jpg";
import poster06 from "@/assets/poster-06.jpg";
import poster07 from "@/assets/poster-07.jpg";
import posterMallorcaCover from "@/assets/poster-mallorca-cover.jpg";
import muralSafariQuarto from "@/assets/mural-safari-quarto.jpeg";

import portfolioStationery from "@/assets/portfolio-stationery.jpg";
import stationeryJoanaFrancisco from "@/assets/stationery-joana-francisco.jpg";
import stationeryBatizadoMatias from "@/assets/stationery-batizado-matias.jpg";
import stationeryQuintaCamelias from "@/assets/stationery-quinta-camelias.jpg";
import stationeryAntonioPedro from "@/assets/stationery-antonio-pedro.jpg";
import quadro03 from "@/assets/quadro-03.jpg";
import quadro04 from "@/assets/quadro-04.jpg";
import quadro05 from "@/assets/quadro-05.jpg";
import quadroMariaTeresa2 from "@/assets/quadro-maria-teresa-2.png";
import quadroMariaTeresa3 from "@/assets/quadro-maria-teresa-3.png";
import quadroMariaTeresa4 from "@/assets/quadro-maria-teresa-4.png";
import quadroMariaTeresa5 from "@/assets/quadro-maria-teresa-5.png";
import quadroImg4451 from "@/assets/quadro-img-4451.jpg";
import quadroImg9489 from "@/assets/quadro-img-9489.jpg";
import quadroImg9490 from "@/assets/quadro-img-9490.jpg";
import quadroImg9493 from "@/assets/quadro-img-9493.jpg";
import quadroImg9497 from "@/assets/quadro-img-9497.jpg";
import quadroImg97513 from "@/assets/quadro-img-9751-3.jpg";
import { createCollectionPageJsonLd, createPageHead } from "@/lib/seo";

type Categoria = {
  slug: string;
  titulo: string;
  descricao: string;
  intro: string;
  imagens: { src: string; alt: string }[];
};

const categorias: Record<string, Categoria> = {
  quadros: {
    slug: "quadros",
    titulo: "Quadros",
    descricao: "Pinturas únicas em diferentes técnicas e estilos.",
    intro:
      "Coleção própria e obras personalizadas, pensadas em conjunto.",
    imagens: [
      { src: portfolioQuadros, alt: "Quadro abstrato em tons quentes" },
      { src: quadro03, alt: "Pintura abstrata em amarelo e verde" },
      { src: quadro04, alt: "Composição abstrata com formas orgânicas em verde e amarelo" },
      { src: quadro05, alt: "Pintura de tachos sobre fundo bordô com cone de gelado" },
      { src: quadroMariaTeresa2, alt: "Quadro com formas botânicas em branco, dourado e bordô" },
      { src: quadroMariaTeresa3, alt: "Composição botânica abstrata em bordô, rosa e dourado" },
      { src: quadroMariaTeresa4, alt: "Quadro abstrato botânico em azul escuro e tons pêssego" },
      { src: quadroMariaTeresa5, alt: "Conjunto de três quadros abstratos botânicos" },
      { src: quadroImg4451, alt: "Três quadros expostos sobre aparador de madeira" },
      { src: quadroImg9489, alt: "Três desenhos emoldurados apoiados sobre prateleira" },
      { src: quadroImg9490, alt: "Desenho abstrato em moldura de madeira com fundo amarelo suave" },
      { src: quadroImg9493, alt: "Desenho com formas circulares e linhas cinzentas" },
      { src: quadroImg9497, alt: "Ilustração abstrata em moldura com formas cinzentas e amarelas" },
      { src: quadroImg97513, alt: "Quadro com composição floral em rosa e azul" },
    ],
  },
  posters: {
    slug: "posters",
    titulo: "Posters",
    descricao: "Posters ilustrados em papel, cada um com um desenho original.",
    intro:
      "Ilustrados em papel, cada poster carrega um desenho único feito à mão.",
    imagens: [
      { src: poster07, alt: "Ilustração em aguarela de Mallorca baseada numa fotografia" },
      { src: posterMallorcaCover, alt: "Poster Mallorca Maio 2026 em aguarela" },
    ],
  },
  murais: {
    slug: "murais",
    titulo: "Murais de parede",
    descricao: "Murais pintados à mão que transformam qualquer espaço.",
    intro:
      "Murais pintados à mão que transformam espaços.",
    imagens: [
      { src: muralSafariQuarto, alt: "Mural de safari pintado à mão num quarto com girafas, macacos e árvores" },
      { src: poster01, alt: "Mural floral em parede branca com ramos e flores" },
      { src: poster02, alt: "Porta integrada com ilustração de ramos e flores" },
      { src: poster03, alt: "Detalhe de mural com ramos, folhas e pequenas flores" },
      { src: poster04, alt: "Mural vertical com ramos delicados e flores rosa" },
      { src: poster05, alt: "Painéis pintados à mão com animais e jardim" },
      { src: poster06, alt: "Atelier em frente a painéis com elefante, girafa e jardim" },
    ],
  },
  stationery: {
    slug: "stationery",
    titulo: "Stationery",
    descricao: "Convites e materiais de papelaria personalizados para eventos.",
    intro:
      "Convites e todos os outros materiais, com conceito e desenhos personalizados.",
    imagens: [
      { src: stationeryJoanaFrancisco, alt: "Suite de convites de casamento Joana e Francisco em tons verdes" },
      { src: stationeryBatizadoMatias, alt: "Convites de batizado do Matias em tons dourados" },
      { src: stationeryQuintaCamelias, alt: "Convite Quinta das Camélias ilustrado em aguarela" },
      { src: stationeryAntonioPedro, alt: "Convites do António Pedro com ursinhos em aguarela" },
    ],
  },
};

export const Route = createFileRoute("/portefolio/$categoria")({
  loader: ({ params }) => {
    const cat = categorias[params.categoria];
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.cat;
    const title = cat ? `${cat.titulo} — Maria Teresa Desenho` : "Portefólio — Maria Teresa Desenho";
    const description =
      cat?.descricao ??
      "Portefólio de quadros, murais, posters e stationery personalizados de Maria Teresa Desenho em Guimarães, Portugal.";
    const path = cat ? `/portefolio/${cat.slug}` : "/portefolio/quadros";

    return createPageHead({
      title,
      description,
      path,
      image: cat?.imagens[0]?.src,
      imageAlt: cat?.imagens[0]?.alt,
      type: "website",
      jsonLd: cat
        ? createCollectionPageJsonLd({
            title,
            description,
            path,
            images: cat.imagens,
          })
        : undefined,
    });
  },
  component: CategoriaPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Categoria não encontrada</h1>
      <Link to="/" className="mt-8 inline-block text-sm uppercase tracking-[0.22em] hover:text-accent">
        ← Voltar ao início
      </Link>
    </div>
  ),
});

function CategoriaPage() {
  const { cat } = Route.useLoaderData();
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null);
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
            {cat.imagens.map((img: { src: string; alt: string }, i: number) => (
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
